import Dexie, { type Table } from 'dexie';
import type { Brand, DecisionRule, CustomSet } from '@/domain/types';

export interface MetaRow {
  key: string;
  value: unknown;
}

export class GuitarStringsDB extends Dexie {
  brands!: Table<Brand, string>;
  decisionMatrix!: Table<DecisionRule, string>;
  savedSets!: Table<CustomSet, number>;
  meta!: Table<MetaRow, string>;

  constructor() {
    super('GuitarStringsDB');
    this.version(1).stores({
      brands: 'id, name, strategyKey',
      decisionMatrix: 'id, toneGoal, trebleMat, bassMat, tension',
      savedSets: '++id, brandId, createdAt',
      meta: 'key',
    });
  }
}

let _db: GuitarStringsDB | null = null;

export function getDB(): GuitarStringsDB {
  if (!_db) {
    _db = new GuitarStringsDB();
  }
  return _db;
}
