import type { IStringRepository, INamingStrategy } from '@/domain/contracts';
import type { Brand, BassString, TrebleString, TensionOption, DecisionRule, CustomSet, GeneratedSetResult } from '@/domain/types';
import { getNamingStrategy } from '@/infrastructure/naming-strategies';

export class GenerateSetCodeUseCase {
  constructor(private repo: IStringRepository) {}

  execute(
    brand: Brand,
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption
  ): GeneratedSetResult {
    const strategy: INamingStrategy = getNamingStrategy(brand.strategyKey);
    return strategy.generateSetName(treble, bass, tension, brand);
  }
}

export class GetDecisionRecommendationsUseCase {
  constructor(private repo: IStringRepository) {}

  async execute(filters: {
    trebleMat?: string;
    bassMat?: string;
    tension?: string;
  }): Promise<DecisionRule[]> {
    const all = await this.repo.getDecisionMatrix();
    return all.filter((r) => {
      if (filters.trebleMat && r.trebleMat !== filters.trebleMat) return false;
      if (filters.bassMat && r.bassMat !== filters.bassMat) return false;
      if (filters.tension && r.tension !== filters.tension) return false;
      return true;
    });
  }
}

export class ManageBrandDataUseCase {
  constructor(private repo: IStringRepository) {}

  async addBrand(brand: Brand) { await this.repo.addBrand(brand); }
  async updateBrand(brand: Brand) { await this.repo.updateBrand(brand); }
  async deleteBrand(id: string) { await this.repo.deleteBrand(id); }

  async addBassString(brandId: string, bass: BassString) { await this.repo.addBassString(brandId, bass); }
  async updateBassString(brandId: string, bass: BassString) { await this.repo.updateBassString(brandId, bass); }
  async deleteBassString(brandId: string, bassId: string) { await this.repo.deleteBassString(brandId, bassId); }

  async addTrebleString(brandId: string, treble: TrebleString) { await this.repo.addTrebleString(brandId, treble); }
  async updateTrebleString(brandId: string, treble: TrebleString) { await this.repo.updateTrebleString(brandId, treble); }
  async deleteTrebleString(brandId: string, trebleId: string) { await this.repo.deleteTrebleString(brandId, trebleId); }

  async addTension(brandId: string, tension: TensionOption) { await this.repo.addTension(brandId, tension); }
  async deleteTension(brandId: string, index: number) { await this.repo.deleteTension(brandId, index); }

  async addDecisionRule(rule: DecisionRule) { await this.repo.addDecisionRule(rule); }
  async updateDecisionRule(rule: DecisionRule) { await this.repo.updateDecisionRule(rule); }
  async deleteDecisionRule(id: string) { await this.repo.deleteDecisionRule(id); }
}

export class ImportExportConfigUseCase {
  constructor(private repo: IStringRepository) {}

  async exportJSON(): Promise<string> { return this.repo.exportAll(); }

  async importJSON(json: string): Promise<void> { await this.repo.importAll(json); }

  exportCSV(savedSets: CustomSet[]): string {
    const header = 'Brand,Treble,Bass,Tension,Code,CreatedAt\n';
    const rows = savedSets.map((s) =>
      `"${s.brandName}","${s.trebleName}","${s.bassName}","${s.tensionLabel}","${s.generatedCode.replace(/"/g, '""')}",${new Date(s.createdAt).toISOString()}`
    );
    return header + rows.join('\n');
  }
}

export class SavedSetsUseCase {
  constructor(private repo: IStringRepository) {}

  async getAll(): Promise<CustomSet[]> { return this.repo.getSavedSets(); }
  async save(set: CustomSet): Promise<void> { await this.repo.saveSet(set); }
  async delete(id: number): Promise<void> { await this.repo.deleteSet(id); }
}
