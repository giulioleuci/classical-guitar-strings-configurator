export type StrategyKey =
  | 'SAVAREZ'
  | 'DADDARIO'
  | 'AUGUSTINE'
  | 'LABELLA'
  | 'ROYAL_CLASSIC'
  | 'GENERIC';

export interface StringPhysicalSpec {
  stringNumber: 1 | 2 | 3 | 4 | 5 | 6;
  note: string;
  gaugeMm: number;
  gaugeInch: number;
  tensionKg: number;
  tensionLbs: number;
}

export interface TrebleString {
  id: string;
  name: string;
  code: string;
  material: string;
  tone: string;
  specs?: Record<string, StringPhysicalSpec[]>;
}

export interface BassString {
  id: string;
  name: string;
  code: string;
  material: string;
  tone: string;
  specs?: Record<string, StringPhysicalSpec[]>;
}

export interface TensionOption {
  label: string;
  code: string;
  standardLevel?: 'Low' | 'Normal' | 'High' | 'Extra High' | 'Mixed';
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
  totalTensionKg?: number;
  totalTensionLbs?: number;
}

export interface GeneratedSetResult {
  code: string;
  explanation: string;
  specs?: StringPhysicalSpec[];
  totalTensionKg?: number;
  totalTensionLbs?: number;
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

