import type { IStringRepository } from '@/domain/contracts';
import type {
  Brand,
  BassString,
  TrebleString,
  TensionOption,
  DecisionRule,
  CustomSet,
  SeedData,
} from '@/domain/types';
import { getDB } from './database';
import { SEED_DATA } from './seed-data';

export class DexieStringRepository implements IStringRepository {
  private async ensureSeeded(): Promise<void> {
    const db = getDB();
    const versionRow = await db.meta.get('data_version');
    if (versionRow?.value === 5) return;

    await db.transaction('rw', db.brands, db.decisionMatrix, db.meta, async () => {
      await db.brands.clear();
      await db.brands.bulkPut(SEED_DATA.brands);
      await db.decisionMatrix.clear();
      await db.decisionMatrix.bulkPut(SEED_DATA.decisionMatrix);
      await db.meta.put({ key: 'seeded', value: true });
      await db.meta.put({ key: 'data_version', value: 5 });
      await db.meta.put({ key: 'macroMaterials', value: SEED_DATA.macroMaterials });
      await db.meta.put({ key: 'standardTensions', value: SEED_DATA.standardTensions });
    });
  }

  async getBrands(): Promise<Brand[]> {
    await this.ensureSeeded();
    return getDB().brands.toArray();
  }

  async getBrand(id: string): Promise<Brand | undefined> {
    await this.ensureSeeded();
    return getDB().brands.get(id);
  }

  async addBrand(brand: Brand): Promise<void> {
    await getDB().brands.put(brand);
  }

  async updateBrand(brand: Brand): Promise<void> {
    await getDB().brands.put(brand);
  }

  async deleteBrand(id: string): Promise<void> {
    await getDB().brands.delete(id);
  }

  private async mutateBrand(
    brandId: string,
    fn: (brand: Brand) => void
  ): Promise<void> {
    const db = getDB();
    const brand = await db.brands.get(brandId);
    if (!brand) return;
    fn(brand);
    await db.brands.put(brand);
  }

  async addBassString(brandId: string, bass: BassString): Promise<void> {
    await this.mutateBrand(brandId, (b) => b.basses.push(bass));
  }

  async updateBassString(brandId: string, bass: BassString): Promise<void> {
    await this.mutateBrand(brandId, (b) => {
      const idx = b.basses.findIndex((x) => x.id === bass.id);
      if (idx >= 0) b.basses[idx] = bass;
    });
  }

  async deleteBassString(brandId: string, bassId: string): Promise<void> {
    await this.mutateBrand(brandId, (b) => {
      b.basses = b.basses.filter((x) => x.id !== bassId);
    });
  }

  async addTrebleString(brandId: string, treble: TrebleString): Promise<void> {
    await this.mutateBrand(brandId, (b) => b.trebles.push(treble));
  }

  async updateTrebleString(brandId: string, treble: TrebleString): Promise<void> {
    await this.mutateBrand(brandId, (b) => {
      const idx = b.trebles.findIndex((x) => x.id === treble.id);
      if (idx >= 0) b.trebles[idx] = treble;
    });
  }

  async deleteTrebleString(brandId: string, trebleId: string): Promise<void> {
    await this.mutateBrand(brandId, (b) => {
      b.trebles = b.trebles.filter((x) => x.id !== trebleId);
    });
  }

  async addTension(brandId: string, tension: TensionOption): Promise<void> {
    await this.mutateBrand(brandId, (b) => b.tensions.push(tension));
  }

  async deleteTension(brandId: string, index: number): Promise<void> {
    await this.mutateBrand(brandId, (b) => {
      b.tensions.splice(index, 1);
    });
  }

  async getDecisionMatrix(): Promise<DecisionRule[]> {
    await this.ensureSeeded();
    return getDB().decisionMatrix.toArray();
  }

  async addDecisionRule(rule: DecisionRule): Promise<void> {
    await getDB().decisionMatrix.put(rule);
  }

  async updateDecisionRule(rule: DecisionRule): Promise<void> {
    await getDB().decisionMatrix.put(rule);
  }

  async deleteDecisionRule(id: string): Promise<void> {
    await getDB().decisionMatrix.delete(id);
  }

  async getSavedSets(): Promise<CustomSet[]> {
    return getDB().savedSets.orderBy('createdAt').reverse().toArray();
  }

  async saveSet(set: CustomSet): Promise<void> {
    await getDB().savedSets.put(set);
  }

  async deleteSet(id: number): Promise<void> {
    await getDB().savedSets.delete(id);
  }

  async exportAll(): Promise<string> {
    const db = getDB();
    const [brands, decisionMatrix, savedSets, macroMaterialsRow, tensionsRow] = await Promise.all([
      db.brands.toArray(),
      db.decisionMatrix.toArray(),
      db.savedSets.toArray(),
      db.meta.get('macroMaterials'),
      db.meta.get('standardTensions'),
    ]);
    const data: SeedData & { savedSets: CustomSet[] } = {
      macroMaterials: (macroMaterialsRow?.value as SeedData['macroMaterials']) || SEED_DATA.macroMaterials,
      standardTensions: (tensionsRow?.value as string[]) || SEED_DATA.standardTensions,
      brands,
      decisionMatrix,
      savedSets,
    };
    return JSON.stringify(data, null, 2);
  }

  async importAll(json: string): Promise<void> {
    const data = JSON.parse(json) as SeedData & { savedSets?: CustomSet[] };
    const db = getDB();
    await db.transaction('rw', db.brands, db.decisionMatrix, db.savedSets, db.meta, async () => {
      await db.brands.clear();
      await db.decisionMatrix.clear();
      await db.savedSets.clear();
      if (data.brands?.length) await db.brands.bulkPut(data.brands);
      if (data.decisionMatrix?.length) await db.decisionMatrix.bulkPut(data.decisionMatrix);
      if (data.savedSets?.length) await db.savedSets.bulkPut(data.savedSets);
      if (data.macroMaterials) await db.meta.put({ key: 'macroMaterials', value: data.macroMaterials });
      if (data.standardTensions) await db.meta.put({ key: 'standardTensions', value: data.standardTensions });
      await db.meta.put({ key: 'seeded', value: true });
    });
  }

  async getMacroMaterials(): Promise<{ basses: string[]; trebles: string[] }> {
    await this.ensureSeeded();
    const row = await getDB().meta.get('macroMaterials');
    return (row?.value as { basses: string[]; trebles: string[] }) || SEED_DATA.macroMaterials;
  }

  async getStandardTensions(): Promise<string[]> {
    await this.ensureSeeded();
    const row = await getDB().meta.get('standardTensions');
    return (row?.value as string[]) || SEED_DATA.standardTensions;
  }
}
