import type { SeedData } from '@/domain/types';

export const SEED_DATA: SeedData = {
  macroMaterials: {
    basses: ['Nylon (bassi)', 'Composito / Dynacore (bassi)'],
    trebles: [
      'Nylon (cantini)',
      'Carbonio / Fluorocarbonio (cantini)',
      'Titanium Nylon (cantini)',
      'Misto (cantini)',
    ],
  },
  standardTensions: ['Low / Normal', 'Medium', 'High / Hard', 'Extra High / Extra Hard'],
  brands: [
    {
      id: 'savarez',
      name: 'Savarez',
      strategyKey: 'SAVAREZ',
      basses: [
        { id: 's_b1', name: 'Corum', code: '500', material: 'Nylon (bassi)', tone: 'Rotondo, elevato comfort al tocco' },
        { id: 's_b2', name: 'Cantiga', code: '510', material: 'Nylon (bassi)', tone: 'Timbro ricco, grande sustain e durata' },
        { id: 's_b3', name: 'Cantiga Premium', code: '510P', material: 'Nylon (bassi)', tone: 'Armonici superiori, avvolgimento raffinato' },
        { id: 's_b4', name: 'HT Classic', code: '540', material: 'Nylon (bassi)', tone: 'Risposta immediata, aperto e brillante' },
        { id: 's_b5', name: 'Traditional / Soliste', code: '520/570', material: 'Nylon (bassi)', tone: 'Timbro storico caldo' },
      ],
      trebles: [
        { id: 's_t1', name: 'New Cristal', code: 'C', material: 'Nylon (cantini)', tone: 'Caldo, morbido, tradizionale' },
        { id: 's_t2', name: 'Alliance', code: 'A', material: 'Carbonio / Fluorocarbonio (cantini)', tone: 'Brillante, proiezione elevata, risposta rapida' },
        { id: 's_t3', name: 'Mixed Trebles', code: 'M', material: 'Misto (cantini)', tone: 'Ibrido nylon/carbonio' },
      ],
      tensions: [
        { label: 'Normal (R)', code: 'R' },
        { label: 'High (J)', code: 'J' },
        { label: 'Mixed (Cantini Normal / Bassi High)', code: 'RJ' },
      ],
    },
    {
      id: 'daddario',
      name: 'D\u2019Addario',
      strategyKey: 'DADDARIO',
      basses: [
        { id: 'd_b1', name: 'Nylon Core (Pro-Arté Standard)', code: 'EJ', material: 'Nylon (bassi)', tone: 'Caldo e bilanciato' },
        { id: 'd_b2', name: 'Dynacore / Composite', code: 'EJ', material: 'Composito / Dynacore (bassi)', tone: 'Dinamico, flessibile, bassi ricchi' },
        { id: 'd_b3', name: 'XT Coated', code: 'XT', material: 'Composito / Dynacore (bassi)', tone: 'Lunga durata con rivestimento protettivo' },
      ],
      trebles: [
        { id: 'd_t1', name: 'Pro-Arté Nylon', code: '', material: 'Nylon (cantini)', tone: 'Suono caldo e rotondo' },
        { id: 'd_t2', name: 'Pro-Arté Carbon', code: 'FF', material: 'Carbonio / Fluorocarbonio (cantini)', tone: 'Brillante, proiezione moderna' },
        { id: 'd_t3', name: 'Titanium Nylon', code: 'TT', material: 'Titanium Nylon (cantini)', tone: 'Brillantezza controllata, non metallico' },
      ],
      tensions: [
        { label: 'Normal Tension', code: '45' },
        { label: 'Hard Tension', code: '46' },
        { label: 'Extra Hard Tension', code: '44' },
      ],
    },
    {
      id: 'augustine',
      name: 'Augustine',
      strategyKey: 'AUGUSTINE',
      basses: [
        { id: 'a_b1', name: 'Black', code: 'Black', material: 'Nylon (bassi)', tone: 'Bassa tensione, morbido' },
        { id: 'a_b2', name: 'Red', code: 'Red', material: 'Nylon (bassi)', tone: 'Media tensione, suono bilanciato' },
        { id: 'a_b3', name: 'Blue', code: 'Blue', material: 'Nylon (bassi)', tone: 'Alta tensione, massima proiezione' },
        { id: 'a_b4', name: 'Gold', code: 'Gold', material: 'Nylon (bassi)', tone: 'Brass-plated, timbro rotondo' },
      ],
      trebles: [
        { id: 'a_t1', name: 'Classic', code: 'Classic', material: 'Nylon (cantini)', tone: 'Media tensione, tradizionale' },
        { id: 'a_t2', name: 'Imperial', code: 'Imperial', material: 'Nylon (cantini)', tone: 'Alta tensione, ricco di attacco' },
        { id: 'a_t3', name: 'Regal', code: 'Regal', material: 'Nylon (cantini)', tone: 'Extra-alta tensione, rigido' },
        { id: 'a_t4', name: 'Paragon Carbon', code: 'Paragon', material: 'Carbonio / Fluorocarbonio (cantini)', tone: 'Alta tensione, brillante e tagliente' },
      ],
      tensions: [{ label: 'Standard Matching (Incluso nel colore)', code: 'STD' }],
    },
    {
      id: 'labella',
      name: 'La Bella',
      strategyKey: 'LABELLA',
      basses: [
        { id: 'l_b1', name: '2001 Series Basses', code: '2001', material: 'Nylon (bassi)', tone: 'Concert grade, equilibrato' },
        { id: 'l_b2', name: '900 Series Basses', code: '900', material: 'Nylon (bassi)', tone: 'Bassi tradizionali' },
        { id: 'l_b3', name: 'Vivace Basses', code: 'Vivace', material: 'Nylon (bassi)', tone: 'Progettati per abbinarsi al fluorocarbonio' },
      ],
      trebles: [
        { id: 'l_t1', name: '2001 Nylon', code: '2001', material: 'Nylon (cantini)', tone: 'Classico caldo' },
        { id: 'l_t2', name: 'Vivace Carbon', code: 'Vivace', material: 'Carbonio / Fluorocarbonio (cantini)', tone: 'Fluorocarbonio reattivo' },
        { id: 'l_t3', name: '150F Carbon', code: '150F', material: 'Carbonio / Fluorocarbonio (cantini)', tone: 'Alta densità e brillantezza' },
      ],
      tensions: [
        { label: 'Light', code: 'Light' },
        { label: 'Medium / Medium Hard', code: 'Medium Hard' },
        { label: 'Hard', code: 'Hard' },
      ],
    },
    {
      id: 'royalclassic',
      name: 'Royal Classic',
      strategyKey: 'ROYAL_CLASSIC',
      basses: [
        { id: 'rc_b1', name: 'Sonata (SN)', code: 'SN', material: 'Nylon (bassi)', tone: 'Bassi rotondi argentati' },
        { id: 'rc_b2', name: 'Dynamic Silver (DS)', code: 'DS', material: 'Nylon (bassi)', tone: 'Bassi ad altissimo contenuto di argento' },
        { id: 'rc_b3', name: 'JG Soloist Basses', code: 'JG', material: 'Nylon (bassi)', tone: 'Progettati per chitarristi da concerto' },
      ],
      trebles: [
        { id: 'rc_t1', name: 'Futura (Nylon)', code: 'Futura', material: 'Nylon (cantini)', tone: 'Bilanciato e vellutato' },
        { id: 'rc_t2', name: 'JG Carbon/Nylon', code: 'Carbon/Nylon', material: 'Misto (cantini)', tone: '1° Nylon, 2°-3° Carbonio' },
        { id: 'rc_t3', name: 'JG Titanium/Carbon', code: 'Titanium/Carbon', material: 'Titanium Nylon (cantini)', tone: '1°-2° Titanio, 3° Carbonio' },
      ],
      tensions: [
        { label: 'Normal', code: 'Normal' },
        { label: 'High / HT', code: 'High' },
      ],
    },
  ],
  decisionMatrix: [
    {
      id: 'dm_1',
      toneGoal: 'Suono tradizionale, caldo, poco brillante',
      trebleMat: 'Nylon (cantini)',
      bassMat: 'Nylon (bassi)',
      tension: 'Low / Normal',
      recommendations: {
        savarez: '500CR / 520CR',
        daddario: 'EJ45',
        augustine: 'Classic Black / Classic Red',
        labella: '2001 Light / Medium Hard',
        royalclassic: 'Sonata Normal',
      },
    },
    {
      id: 'dm_2',
      toneGoal: 'Suono tradizionale ma con più proiezione',
      trebleMat: 'Nylon (cantini)',
      bassMat: 'Nylon (bassi)',
      tension: 'High / Hard',
      recommendations: {
        savarez: '540CR',
        daddario: 'EJ46',
        augustine: 'Classic Blue',
        labella: '2001 Hard',
        royalclassic: 'Sonata Hard',
      },
    },
    {
      id: 'dm_3',
      toneGoal: 'Suono brillante, moderno, massima proiezione',
      trebleMat: 'Carbonio / Fluorocarbonio (cantini)',
      bassMat: 'Nylon (bassi)',
      tension: 'High / Hard',
      recommendations: {
        savarez: '540AR / 510AR / 510AJ',
        daddario: 'EJ45FF / EJ46FF',
        augustine: 'Paragon Red / Paragon Blue',
        labella: 'Vivace Hard / 150F Hard',
        royalclassic: 'JG Carbon/Nylon High',
      },
    },
    {
      id: 'dm_4',
      toneGoal: "Brillante ma meno 'secco' del carbonio (Titanio)",
      trebleMat: 'Titanium Nylon (cantini)',
      bassMat: 'Composito / Dynacore (bassi)',
      tension: 'High / Hard',
      recommendations: {
        savarez: 'Cantiga + Alliance (Custom)',
        daddario: 'EJ45TT / EJ46TT',
        augustine: 'N/D (Standard)',
        labella: 'Custom Series',
        royalclassic: 'JG Titanium and Carbon High',
      },
    },
  ],
};
