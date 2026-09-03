export type StrategyKey =
  | 'SAVAREZ'
  | 'DADDARIO'
  | 'AUGUSTINE'
  | 'LABELLA'
  | 'ROYAL_CLASSIC'
  | 'GENERIC';

export interface TrebleString {
  id: string;
  name: string;
  code: string;
  material: string;
  tone: string;
}

export interface BassString {
  id: string;
  name: string;
  code: string;
  material: string;
  tone: string;
}

export interface TensionOption {
  label: string;
  code: string;
}

export interface Brand {
  id: string;
  name: string;
  strategyKey: StrategyKey;
  basses: BassString[];
  trebles: TrebleString[];
  tensions: TensionOption[];
}

export interface DecisionRule {
  id: string;
  toneGoal: string;
  trebleMat: string;
  bassMat: string;
  tension: string;
  recommendations: Record<string, string>;
}

export interface CustomSet {
  id?: number;
  brandId: string;
  brandName: string;
  trebleId: string;
  trebleName: string;
  bassId: string;
  bassName: string;
  tensionLabel: string;
  generatedCode: string;
  explanation: string;
  createdAt: number;
}

export interface GeneratedSetResult {
  code: string;
  explanation: string;
}

export interface MacroMaterials {
  basses: string[];
  trebles: string[];
}

export interface SeedData {
  macroMaterials: MacroMaterials;
  standardTensions: string[];
  brands: Brand[];
  decisionMatrix: DecisionRule[];
}
