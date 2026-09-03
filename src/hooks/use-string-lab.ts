import { useCallback, useEffect, useRef, useState } from 'react';
import { DexieStringRepository } from '@/infrastructure/dexie-repository';
import {
  GenerateSetCodeUseCase,
  GetDecisionRecommendationsUseCase,
  ManageBrandDataUseCase,
  ImportExportConfigUseCase,
  SavedSetsUseCase,
} from '@/usecases';
import type { Brand, BassString, TrebleString, TensionOption, DecisionRule, CustomSet, MacroMaterials } from '@/domain/types';

const repo = new DexieStringRepository();

const generateSetCodeUC = new GenerateSetCodeUseCase(repo);
const decisionUC = new GetDecisionRecommendationsUseCase(repo);
const manageDataUC = new ManageBrandDataUseCase(repo);
const importExportUC = new ImportExportConfigUseCase(repo);
const savedSetsUC = new SavedSetsUseCase(repo);

type Listener = () => void;
const listeners = new Set<Listener>();
let version = 0;

function notify() {
  version++;
  listeners.forEach((l) => l());
}

function useDbVersion() {
  const [, setV] = useState(version);
  useEffect(() => {
    const l = () => setV(version);
    listeners.add(l);
    return () => { listeners.delete(l); };
  }, []);
}

export function useStringLab() {
  useDbVersion();

  const [brands, setBrands] = useState<Brand[]>([]);
  const [decisionMatrix, setDecisionMatrix] = useState<DecisionRule[]>([]);
  const [savedSets, setSavedSets] = useState<CustomSet[]>([]);
  const [macroMaterials, setMacroMaterials] = useState<MacroMaterials | undefined>(undefined);
  const [standardTensions, setStandardTensions] = useState<string[]>([]);
  const loadedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const [b, dm, ss, mm, st] = await Promise.all([
        repo.getBrands(),
        repo.getDecisionMatrix(),
        repo.getSavedSets(),
        repo.getMacroMaterials(),
        repo.getStandardTensions(),
      ]);
      if (cancelled) return;
      setBrands(b);
      setDecisionMatrix(dm);
      setSavedSets(ss);
      setMacroMaterials(mm);
      setStandardTensions(st);
      loadedRef.current = true;
    }
    load();
    return () => { cancelled = true; };
  }, [version]);

  const refresh = useCallback(async () => {
    const [b, dm, ss, mm, st] = await Promise.all([
      repo.getBrands(),
      repo.getDecisionMatrix(),
      repo.getSavedSets(),
      repo.getMacroMaterials(),
      repo.getStandardTensions(),
    ]);
    setBrands(b);
    setDecisionMatrix(dm);
    setSavedSets(ss);
    setMacroMaterials(mm);
    setStandardTensions(st);
    notify();
  }, []);

  const generateSetCode = useCallback(
    (brand: Brand, treble: TrebleString, bass: BassString, tension: TensionOption) =>
      generateSetCodeUC.execute(brand, treble, bass, tension),
    []
  );

  const getRecommendations = useCallback(
    (filters: { trebleMat?: string; bassMat?: string; tension?: string }) =>
      decisionUC.execute(filters),
    []
  );

  const saveSet = useCallback(async (set: CustomSet) => {
    await savedSetsUC.save(set);
    await refresh();
  }, [refresh]);

  const deleteSet = useCallback(async (id: number) => {
    await savedSetsUC.delete(id);
    await refresh();
  }, [refresh]);

  const addBrand = useCallback(async (b: Brand) => {
    await manageDataUC.addBrand(b);
    await refresh();
  }, [refresh]);

  const updateBrand = useCallback(async (b: Brand) => {
    await manageDataUC.updateBrand(b);
    await refresh();
  }, [refresh]);

  const deleteBrand = useCallback(async (id: string) => {
    await manageDataUC.deleteBrand(id);
    await refresh();
  }, [refresh]);

  const addBassString = useCallback(async (bid: string, b: BassString) => {
    await manageDataUC.addBassString(bid, b);
    await refresh();
  }, [refresh]);

  const updateBassString = useCallback(async (bid: string, b: BassString) => {
    await manageDataUC.updateBassString(bid, b);
    await refresh();
  }, [refresh]);

  const deleteBassString = useCallback(async (bid: string, id: string) => {
    await manageDataUC.deleteBassString(bid, id);
    await refresh();
  }, [refresh]);

  const addTrebleString = useCallback(async (bid: string, t: TrebleString) => {
    await manageDataUC.addTrebleString(bid, t);
    await refresh();
  }, [refresh]);

  const updateTrebleString = useCallback(async (bid: string, t: TrebleString) => {
    await manageDataUC.updateTrebleString(bid, t);
    await refresh();
  }, [refresh]);

  const deleteTrebleString = useCallback(async (bid: string, id: string) => {
    await manageDataUC.deleteTrebleString(bid, id);
    await refresh();
  }, [refresh]);

  const addTension = useCallback(async (bid: string, t: TensionOption) => {
    await manageDataUC.addTension(bid, t);
    await refresh();
  }, [refresh]);

  const deleteTension = useCallback(async (bid: string, i: number) => {
    await manageDataUC.deleteTension(bid, i);
    await refresh();
  }, [refresh]);

  const addDecisionRule = useCallback(async (r: DecisionRule) => {
    await manageDataUC.addDecisionRule(r);
    await refresh();
  }, [refresh]);

  const updateDecisionRule = useCallback(async (r: DecisionRule) => {
    await manageDataUC.updateDecisionRule(r);
    await refresh();
  }, [refresh]);

  const deleteDecisionRule = useCallback(async (id: string) => {
    await manageDataUC.deleteDecisionRule(id);
    await refresh();
  }, [refresh]);

  const exportJSON = useCallback(() => importExportUC.exportJSON(), []);
  const importJSON = useCallback(async (json: string) => {
    await importExportUC.importJSON(json);
    await refresh();
  }, [refresh]);
  const exportCSV = useCallback((sets: CustomSet[]) => importExportUC.exportCSV(sets), []);

  return {
    brands,
    decisionMatrix,
    savedSets,
    macroMaterials,
    standardTensions,
    generateSetCode,
    getRecommendations,
    saveSet,
    deleteSet,
    addBrand,
    updateBrand,
    deleteBrand,
    addBassString,
    updateBassString,
    deleteBassString,
    addTrebleString,
    updateTrebleString,
    deleteTrebleString,
    addTension,
    deleteTension,
    addDecisionRule,
    updateDecisionRule,
    deleteDecisionRule,
    exportJSON,
    importJSON,
    exportCSV,
  };
}
