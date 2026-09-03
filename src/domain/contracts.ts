import type {
  Brand,
  BassString,
  TrebleString,
  TensionOption,
  DecisionRule,
  CustomSet,
  GeneratedSetResult,
} from './types';

export interface INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    brand: Brand
  ): GeneratedSetResult;
}

export interface IStringRepository {
  // Brands
  getBrands(): Promise<Brand[]>;
  getBrand(id: string): Promise<Brand | undefined>;
  addBrand(brand: Brand): Promise<void>;
  updateBrand(brand: Brand): Promise<void>;
  deleteBrand(id: string): Promise<void>;

  // Bass strings
  addBassString(brandId: string, bass: BassString): Promise<void>;
  updateBassString(brandId: string, bass: BassString): Promise<void>;
  deleteBassString(brandId: string, bassId: string): Promise<void>;

  // Treble strings
  addTrebleString(brandId: string, treble: TrebleString): Promise<void>;
  updateTrebleString(brandId: string, treble: TrebleString): Promise<void>;
  deleteTrebleString(brandId: string, trebleId: string): Promise<void>;

  // Tensions
  addTension(brandId: string, tension: TensionOption): Promise<void>;
  deleteTension(brandId: string, index: number): Promise<void>;

  // Decision matrix
  getDecisionMatrix(): Promise<DecisionRule[]>;
  addDecisionRule(rule: DecisionRule): Promise<void>;
  updateDecisionRule(rule: DecisionRule): Promise<void>;
  deleteDecisionRule(id: string): Promise<void>;

  // Saved sets
  getSavedSets(): Promise<CustomSet[]>;
  saveSet(set: CustomSet): Promise<void>;
  deleteSet(id: number): Promise<void>;

  // Import / Export
  exportAll(): Promise<string>;
  importAll(json: string): Promise<void>;

  // Macro materials & tensions
  getMacroMaterials(): Promise<{ basses: string[]; trebles: string[] }>;
  getStandardTensions(): Promise<string[]>;
}
