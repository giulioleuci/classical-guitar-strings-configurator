import type { SeedData } from '@/domain/types';

export const SEED_DATA: SeedData = {
  macroMaterials: {
    basses: [
      'Nylon / Argento (Silver-plated)',
      'Composito (Silver-plated)',
      'Dynacore (Silver-plated)',
      'Gold / Ottone (Brass-plated)',
      'Levigati / Lisci (Polished)',
    ],
    trebles: [
      'Nylon Tradizionale (Clear)',
      'Carbonio (Fluorocarbonio)',
      'Titanio (Titanium Nylon)',
      'Nylon Rettificato',
      'Nylon Nero',
      'Misto / Ibrido',
    ],
  },
  standardTensions: [
    'Bassa (Low / Light)',
    'Media (Normal / Medium)',
    'Alta (High / Hard)',
    'Extra Alta (Extra Hard)',
    'Mista (Mixed / Differential)',
  ],
  brands: [
    {
      id: 'savarez',
      name: 'Savarez',
      strategyKey: 'SAVAREZ',
      trebles: [
        {
          id: 's_t1',
          name: 'New Cristal',
          code: 'C',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'Cantini in nylon trasparente di altissima purezza. Timbro ricco, limpido, trasparente e cantabile, con perfetto bilanciamento.',
          specs: {
            R: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.82, gaugeInch: 0.0322, tensionKg: 5.6, tensionLbs: 12.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0403, tensionKg: 5.4, tensionLbs: 11.9 },
            ],
            J: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.75, gaugeInch: 0.0295, tensionKg: 8.5, tensionLbs: 18.7 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.86, gaugeInch: 0.0339, tensionKg: 6.4, tensionLbs: 14.1 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.07, gaugeInch: 0.0420, tensionKg: 6.0, tensionLbs: 13.2 },
            ],
            RJ: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.82, gaugeInch: 0.0322, tensionKg: 5.6, tensionLbs: 12.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0403, tensionKg: 5.4, tensionLbs: 11.9 },
            ],
          },
        },
        {
          id: 's_t2',
          name: 'Alliance (KF)',
          code: 'A',
          material: 'Carbonio (Fluorocarbonio)',
          tone: 'Cantini in fluorocarbonio composito KF. Brillantezza straordinaria, proiezione sonora penetrante, risposta immediata e intonazione impeccabile.',
          specs: {
            R: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.62, gaugeInch: 0.0244, tensionKg: 8.4, tensionLbs: 18.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.69, gaugeInch: 0.0272, tensionKg: 6.1, tensionLbs: 13.4 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0339, tensionKg: 5.9, tensionLbs: 13.0 },
            ],
            J: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.64, gaugeInch: 0.0252, tensionKg: 9.0, tensionLbs: 19.8 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.4, tensionLbs: 14.1 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.88, gaugeInch: 0.0346, tensionKg: 6.2, tensionLbs: 13.7 },
            ],
            RJ: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.62, gaugeInch: 0.0244, tensionKg: 8.4, tensionLbs: 18.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.69, gaugeInch: 0.0272, tensionKg: 6.1, tensionLbs: 13.4 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0339, tensionKg: 5.9, tensionLbs: 13.0 },
            ],
          },
        },
        {
          id: 's_t3',
          name: 'Creation Mixed',
          code: 'M',
          material: 'Misto / Ibrido',
          tone: 'Set ibrido che unisce la morbidezza del nylon New Cristal (1ª Mi e 2ª Si) con la brillantezza del carbonio Alliance (3ª Sol), garantendo una transizione omogenea.',
          specs: {
            R: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.82, gaugeInch: 0.0322, tensionKg: 5.6, tensionLbs: 12.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0339, tensionKg: 5.9, tensionLbs: 13.0 },
            ],
            J: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.75, gaugeInch: 0.0295, tensionKg: 8.5, tensionLbs: 18.7 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.86, gaugeInch: 0.0339, tensionKg: 6.4, tensionLbs: 14.1 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.88, gaugeInch: 0.0346, tensionKg: 6.2, tensionLbs: 13.7 },
            ],
            RJ: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.82, gaugeInch: 0.0322, tensionKg: 5.6, tensionLbs: 12.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0339, tensionKg: 5.9, tensionLbs: 13.0 },
            ],
          },
        },
      ],
      basses: [
        {
          id: 's_b1',
          name: 'Corum',
          code: '500',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi flessibili brevettati: risposta rapida e reattiva al tocco, grande gamma dinamica e timbro caldo e sfumato.',
          specs: {
            R: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.5, tensionLbs: 14.3 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.6, tensionLbs: 14.6 },
            ],
            J: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.0, tensionLbs: 17.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.0, tensionLbs: 15.4 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.2, tensionLbs: 15.9 },
            ],
            RJ: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.0, tensionLbs: 17.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.0, tensionLbs: 15.4 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.2, tensionLbs: 15.9 },
            ],
          },
        },
        {
          id: 's_b2',
          name: 'Cantiga',
          code: '510',
          material: 'Composito (Silver-plated)',
          tone: 'Bassi moderni su anima in multifilamento composito. Ricca tavolozza di colori timbrici, risposta precisa e suonabilità fluida.',
          specs: {
            R: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.6, tensionLbs: 16.8 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.6, tensionLbs: 14.6 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.8, tensionLbs: 15.0 },
            ],
            J: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.2, tensionLbs: 18.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.1, tensionLbs: 15.7 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.3, tensionLbs: 16.1 },
            ],
            RJ: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.2, tensionLbs: 18.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.1, tensionLbs: 15.7 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.3, tensionLbs: 16.1 },
            ],
          },
        },
        {
          id: 's_b3',
          name: 'Cantiga Premium',
          code: '510P',
          material: 'Composito (Silver-plated)',
          tone: 'Bassi top di gamma con lega metallica speciale su anima Cantiga. Suono profondo e denso (ottimo sul 6° Mi), armonici brillanti non aggressivi, grande tenuta dinamica e longevità raddoppiata.',
          specs: {
            R: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.7, tensionLbs: 17.0 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.7, tensionLbs: 14.8 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.9, tensionLbs: 15.2 },
            ],
            J: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.3, tensionLbs: 18.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.4, tensionLbs: 16.3 },
            ],
            RJ: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.3, tensionLbs: 18.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.4, tensionLbs: 16.3 },
            ],
          },
        },
        {
          id: 's_b6',
          name: 'Polished Cantiga',
          code: '510H',
          material: 'Levigati / Lisci (Polished)',
          tone: 'Bassi Cantiga in argento puro levigato e rettificato. Riducono a zero i rumori di scorrimento delle dita (squeak), ideali per registrazioni in studio e concerti amplificati.',
          specs: {
            R: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.6, tensionLbs: 16.8 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.6, tensionLbs: 14.6 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.8, tensionLbs: 15.0 },
            ],
            J: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.2, tensionLbs: 18.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.1, tensionLbs: 15.7 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.3, tensionLbs: 16.1 },
            ],
          },
        },
        {
          id: 's_b4',
          name: 'HT Classic',
          code: '540',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi tradizionali ad alta tensione: attacco netto, suono aperto, brillante e definito, ideali per repertorio solistico.',
          specs: {
            R: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.72, gaugeInch: 0.0280, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 6.4, tensionLbs: 14.1 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.07, gaugeInch: 0.0420, tensionKg: 6.5, tensionLbs: 14.3 },
            ],
            J: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 7.9, tensionLbs: 17.4 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 6.9, tensionLbs: 15.2 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.1, tensionLbs: 15.7 },
            ],
          },
        },
        {
          id: 's_b5',
          name: 'Traditional / Soliste',
          code: '520',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Timbro storico morbido e vellutato, tipico della scuola chitarristica francese classica.',
          specs: {
            R: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.88, gaugeInch: 0.0350, tensionKg: 6.4, tensionLbs: 14.1 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.08, gaugeInch: 0.0420, tensionKg: 6.5, tensionLbs: 14.3 },
            ],
          },
        },
      ],
      tensions: [
        { label: 'Media (Rouge / R)', code: 'R', standardLevel: 'Normal' },
        { label: 'Alta (Jaune / J)', code: 'J', standardLevel: 'High' },
        { label: 'Mista (Cantini R / Bassi J)', code: 'RJ', standardLevel: 'Mixed' },
      ],
    },
    {
      id: 'daddario',
      name: "D'Addario",
      strategyKey: 'DADDARIO',
      trebles: [
        {
          id: 'd_t1',
          name: 'Pro-Arté Clear Nylon',
          code: '',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'I cantini originali D\'Addario in nylon estruso di precisione laser. Timbro tradizionale autentico, caldo, canoro e intonazione impeccabile.',
          specs: {
            '45': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.82, gaugeInch: 0.0322, tensionKg: 5.5, tensionLbs: 12.1 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0403, tensionKg: 5.3, tensionLbs: 11.7 },
            ],
            '46': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 7.7, tensionLbs: 17.0 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.83, gaugeInch: 0.0327, tensionKg: 5.7, tensionLbs: 12.6 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.04, gaugeInch: 0.0410, tensionKg: 5.5, tensionLbs: 12.1 },
            ],
            '44': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 8.0, tensionLbs: 17.6 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.85, gaugeInch: 0.0333, tensionKg: 5.9, tensionLbs: 13.0 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.06, gaugeInch: 0.0416, tensionKg: 5.7, tensionLbs: 12.6 },
            ],
          },
        },
        {
          id: 'd_t2',
          name: 'Pro-Arté Carbon',
          code: 'FF',
          material: 'Carbonio (Fluorocarbonio)',
          tone: 'Cantini in fluorocarbonio ad alta densità. Timbro moderno, brillante, grande proiezione sonora e intonazione superiore lungo tutta la tastiera.',
          specs: {
            '45': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.61, gaugeInch: 0.0240, tensionKg: 8.2, tensionLbs: 18.1 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.69, gaugeInch: 0.0270, tensionKg: 6.0, tensionLbs: 13.2 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.84, gaugeInch: 0.0330, tensionKg: 5.8, tensionLbs: 12.8 },
            ],
            '46': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.62, gaugeInch: 0.0245, tensionKg: 8.6, tensionLbs: 19.0 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.70, gaugeInch: 0.0275, tensionKg: 6.3, tensionLbs: 13.9 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 6.1, tensionLbs: 13.4 },
            ],
          },
        },
        {
          id: 'd_t3',
          name: 'Titanium Nylon',
          code: 'TT',
          material: 'Titanio (Titanium Nylon)',
          tone: 'Cantini in poliammide titanio dal tocco setoso. Suono distintivo, più brillante e aperto rispetto al nylon tradizionale, con sustain e proiezione incrementati.',
          specs: {
            '45': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.6, tensionLbs: 16.8 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.84, gaugeInch: 0.0332, tensionKg: 5.7, tensionLbs: 12.6 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0400, tensionKg: 5.4, tensionLbs: 11.9 },
            ],
            '46': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 7.9, tensionLbs: 17.4 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.86, gaugeInch: 0.0337, tensionKg: 6.0, tensionLbs: 13.2 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.04, gaugeInch: 0.0410, tensionKg: 5.7, tensionLbs: 12.6 },
            ],
          },
        },
        {
          id: 'd_t4',
          name: 'Rectified Nylon',
          code: 'R',
          material: 'Nylon Rettificato',
          tone: 'Cantini smerigliati con lavorazione micrometrica centerless. Timbro caldo, scuro, pastoso e superficie leggermente texturizzata per una presa salda e massimo controllo del tocco.',
          specs: {
            '45': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.81, gaugeInch: 0.0320, tensionKg: 5.4, tensionLbs: 11.9 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0400, tensionKg: 5.3, tensionLbs: 11.7 },
            ],
            '46': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 7.6, tensionLbs: 16.8 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.83, gaugeInch: 0.0325, tensionKg: 5.6, tensionLbs: 12.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.04, gaugeInch: 0.0408, tensionKg: 5.5, tensionLbs: 12.1 },
            ],
          },
        },
        {
          id: 'd_t5',
          name: 'Black Nylon',
          code: 'B',
          material: 'Nylon Nero',
          tone: 'Cantini in nylon nero con suono caldo, vellutato, ricco e corposo, con un attacco morbido e intonazione rigorosa.',
          specs: {
            '45': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.81, gaugeInch: 0.0320, tensionKg: 5.4, tensionLbs: 11.9 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0400, tensionKg: 5.2, tensionLbs: 11.5 },
            ],
            '46': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 7.7, tensionLbs: 17.0 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.83, gaugeInch: 0.0327, tensionKg: 5.7, tensionLbs: 12.6 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.04, gaugeInch: 0.0410, tensionKg: 5.5, tensionLbs: 12.1 },
            ],
          },
        },
      ],
      basses: [
        {
          id: 'd_b1',
          name: 'Nylon Core (Standard)',
          code: 'EJ',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'I leggendari bassi Pro-Arté con anima in multifilamento di nylon e avvolgimento argentato. Timbro caldo, rotondo e pieno di corpo.',
          specs: {
            '45': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.8, tensionLbs: 15.0 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.4, tensionLbs: 14.1 },
            ],
            '46': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 7.8, tensionLbs: 17.2 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 6.8, tensionLbs: 15.0 },
            ],
            '44': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.1, tensionLbs: 17.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.94, gaugeInch: 0.0370, tensionKg: 7.7, tensionLbs: 17.0 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.14, gaugeInch: 0.0450, tensionKg: 7.3, tensionLbs: 16.1 },
            ],
          },
        },
        {
          id: 'd_b2',
          name: 'Composite Core',
          code: 'EJ',
          material: 'Composito (Silver-plated)',
          tone: 'Anima esclusiva in multifilamento composito. Suono potente, caldo e risonante con durata 2-3 volte superiore alle corde tradizionali.',
          specs: {
            '45': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.2, tensionLbs: 13.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.7, tensionLbs: 14.7 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 6.9, tensionLbs: 15.3 },
            ],
            '46': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.1, tensionLbs: 15.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.3, tensionLbs: 16.0 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.17, gaugeInch: 0.0460, tensionKg: 7.5, tensionLbs: 16.5 },
            ],
          },
        },
        {
          id: 'd_b3',
          name: 'Dynacore',
          code: 'EJ',
          material: 'Dynacore (Silver-plated)',
          tone: 'Esclusivo processo di torsione dell\'anima in composito. Intonazione perfetta, grande flessibilità sotto le dita, proiezione e timbro audace e incisivo.',
          specs: {
            '45': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 7.0, tensionLbs: 15.4 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 6.6, tensionLbs: 14.6 },
            ],
            '46': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 8.0, tensionLbs: 17.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.17, gaugeInch: 0.0460, tensionKg: 7.1, tensionLbs: 15.7 },
            ],
          },
        },
        {
          id: 'd_b4',
          name: 'XT Composite (Coated)',
          code: 'XTC',
          material: 'Composito (Silver-plated)',
          tone: 'Trattamento protettivo idrofobico micro-fine che preserva la brillantezza e la naturale sensazione tattile, con durata fino a 4 volte superiore.',
          specs: {
            '45': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.2, tensionLbs: 13.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.7, tensionLbs: 14.7 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 6.9, tensionLbs: 15.3 },
            ],
            '46': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.1, tensionLbs: 15.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.3, tensionLbs: 16.0 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.17, gaugeInch: 0.0460, tensionKg: 7.5, tensionLbs: 16.5 },
            ],
          },
        },
        {
          id: 'd_b5',
          name: 'Lightly Polished',
          code: 'LP',
          material: 'Levigati / Lisci (Polished)',
          tone: 'Anima in composito con superficie semi-levigata per azzerare i rumori di scorrimento delle dita (finger squeak), ideali per incisioni in studio.',
          specs: {
            '45': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.3, tensionLbs: 13.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.7, tensionLbs: 14.8 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 6.8, tensionLbs: 15.0 },
            ],
            '46': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.17, gaugeInch: 0.0460, tensionKg: 7.4, tensionLbs: 16.3 },
            ],
          },
        },
      ],
      tensions: [
        { label: 'Media (Normal Tension - 45)', code: '45', standardLevel: 'Normal' },
        { label: 'Alta (Hard Tension - 46)', code: '46', standardLevel: 'High' },
        { label: 'Extra Alta (Extra Hard - 44)', code: '44', standardLevel: 'Extra High' },
      ],
    },
    {
      id: 'augustine',
      name: 'Augustine',
      strategyKey: 'AUGUSTINE',
      trebles: [
        {
          id: 'a_t1',
          name: 'Classic',
          code: 'Classic',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'Cantini storici in nylon tradizionale a tensione media, nati dalla collaborazione con Andrés Segovia. Timbro caldo, intimo, pastoso e ricco di tradizione.',
          specs: {
            STD: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.81, gaugeInch: 0.0320, tensionKg: 5.4, tensionLbs: 11.9 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0400, tensionKg: 5.2, tensionLbs: 11.5 },
            ],
          },
        },
        {
          id: 'a_t2',
          name: 'Imperial',
          code: 'Imperial',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'Cantini in crystal nylon a tensione medio-alta. Offrono maggiore attacco, definizione, brillantezza e prontezza rispetto ai Classic.',
          specs: {
            STD: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 7.8, tensionLbs: 17.2 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.83, gaugeInch: 0.0325, tensionKg: 5.7, tensionLbs: 12.6 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.03, gaugeInch: 0.0405, tensionKg: 5.6, tensionLbs: 12.3 },
            ],
          },
        },
        {
          id: 'a_t3',
          name: 'Regal',
          code: 'Regal',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'Cantini in crystal nylon ad alta tensione. Tocco rigido e solido, massima risonanza, potenza e proiezione solistica da concerto.',
          specs: {
            STD: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.75, gaugeInch: 0.0295, tensionKg: 8.3, tensionLbs: 18.3 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.85, gaugeInch: 0.0335, tensionKg: 6.1, tensionLbs: 13.4 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.05, gaugeInch: 0.0415, tensionKg: 6.0, tensionLbs: 13.2 },
            ],
          },
        },
        {
          id: 'a_t4',
          name: 'Paragon Carbon',
          code: 'Paragon',
          material: 'Carbonio (Fluorocarbonio)',
          tone: 'Cantini moderni in puro fluorocarbonio. Timbro brillante, penetrante, incisivo e reattività dinamica istantanea.',
          specs: {
            STD: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.61, gaugeInch: 0.0240, tensionKg: 8.5, tensionLbs: 18.7 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.69, gaugeInch: 0.0270, tensionKg: 6.2, tensionLbs: 13.7 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.85, gaugeInch: 0.0335, tensionKg: 6.0, tensionLbs: 13.2 },
            ],
          },
        },
      ],
      basses: [
        {
          id: 'a_b1',
          name: 'Black (Light)',
          code: 'Black',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi argentati a tensione leggera. Risposta morbida, tocco fluido e timbro caldo, ideali per strumenti delicati o massimo comfort.',
          specs: {
            STD: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 6.8, tensionLbs: 15.0 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.83, gaugeInch: 0.0325, tensionKg: 6.1, tensionLbs: 13.4 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.03, gaugeInch: 0.0405, tensionKg: 5.9, tensionLbs: 13.0 },
            ],
          },
        },
        {
          id: 'a_b2',
          name: 'Red (Medium)',
          code: 'Red',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi argentati a media tensione bilanciata. Lo standard storico di riferimento Augustine per rotondità, calore e corpo.',
          specs: {
            STD: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.75, gaugeInch: 0.0295, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.9, tensionLbs: 15.2 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.08, gaugeInch: 0.0425, tensionKg: 6.6, tensionLbs: 14.6 },
            ],
          },
        },
        {
          id: 'a_b3',
          name: 'Blue (High)',
          code: 'Blue',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi argentati ad alta tensione. Massima potenza, proiezione sonora, timbro aperto e profondo con sustain prolungato.',
          specs: {
            STD: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.77, gaugeInch: 0.0305, tensionKg: 8.1, tensionLbs: 17.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.6, tensionLbs: 16.8 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.14, gaugeInch: 0.0450, tensionKg: 7.2, tensionLbs: 15.9 },
            ],
          },
        },
        {
          id: 'a_b4',
          name: 'Gold (Brass)',
          code: 'Gold',
          material: 'Gold / Ottone (Brass-plated)',
          tone: 'Bassi con avvolgimento in speciale lega d\'ottone dorato. Timbro particolarmente rotondo, caldo e vellutato con morbidezza d\'attacco.',
          specs: {
            STD: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.88, gaugeInch: 0.0345, tensionKg: 6.7, tensionLbs: 14.8 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.07, gaugeInch: 0.0420, tensionKg: 6.5, tensionLbs: 14.3 },
            ],
          },
        },
      ],
      tensions: [
        { label: 'Calibrazione per Modello', code: 'STD', standardLevel: 'Normal' },
      ],
    },
    {
      id: 'labella',
      name: 'La Bella',
      strategyKey: 'LABELLA',
      trebles: [
        {
          id: 'l_t1',
          name: '2001 Concert Series',
          code: '2001',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'Cantini di grado concertistico in nylon ad altissima purezza. Intonazione impeccabile, timbro ricco, trasparente e grande flessibilità espressiva.',
          specs: {
            Light: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.9, tensionLbs: 15.2 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.81, gaugeInch: 0.0320, tensionKg: 5.2, tensionLbs: 11.5 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0400, tensionKg: 5.0, tensionLbs: 11.0 },
            ],
            'Medium Hard': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.84, gaugeInch: 0.0330, tensionKg: 5.6, tensionLbs: 12.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.04, gaugeInch: 0.0410, tensionKg: 5.4, tensionLbs: 11.9 },
            ],
            Hard: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.1, tensionLbs: 17.9 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 6.1, tensionLbs: 13.4 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.07, gaugeInch: 0.0420, tensionKg: 5.8, tensionLbs: 12.8 },
            ],
          },
        },
        {
          id: 'l_t2',
          name: 'Vivace Carbon',
          code: 'Vivace',
          material: 'Carbonio (Fluorocarbonio)',
          tone: 'Cantini in fluorocarbonio con formulazione esclusiva: uniscono brillantezza e velocità a una piacevole rotondità timbrica.',
          specs: {
            'Medium Hard': [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.61, gaugeInch: 0.0240, tensionKg: 8.1, tensionLbs: 17.9 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.69, gaugeInch: 0.0270, tensionKg: 6.0, tensionLbs: 13.2 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 5.8, tensionLbs: 12.8 },
            ],
            Hard: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.64, gaugeInch: 0.0250, tensionKg: 8.8, tensionLbs: 19.4 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.5, tensionLbs: 14.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.3, tensionLbs: 13.9 },
            ],
          },
        },
        {
          id: 'l_t3',
          name: '150F Carbon',
          code: '150F',
          material: 'Carbonio (Fluorocarbonio)',
          tone: 'Cantini in carbonio ad altissima densità per solisti e concertisti. Massima penetrazione acustica e volume elevato.',
          specs: {
            Hard: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.64, gaugeInch: 0.0250, tensionKg: 8.9, tensionLbs: 19.6 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.6, tensionLbs: 14.6 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.4, tensionLbs: 14.1 },
            ],
          },
        },
      ],
      basses: [
        {
          id: 'l_b1',
          name: '2001 Series Basses',
          code: '2001',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi argentati con anima elastica speciale. Risposta fluida ed equilibrata, ottimo sustain e intonazione stabile.',
          specs: {
            Light: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.72, gaugeInch: 0.0285, tensionKg: 6.8, tensionLbs: 15.0 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 6.2, tensionLbs: 13.7 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.04, gaugeInch: 0.0410, tensionKg: 6.0, tensionLbs: 13.2 },
            ],
            'Medium Hard': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.75, gaugeInch: 0.0295, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.8, tensionLbs: 15.0 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.5, tensionLbs: 14.3 },
            ],
            Hard: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.77, gaugeInch: 0.0305, tensionKg: 8.2, tensionLbs: 18.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.1, tensionLbs: 15.7 },
            ],
          },
        },
        {
          id: 'l_b2',
          name: 'Vivace Basses',
          code: 'Vivace',
          material: 'Composito (Silver-plated)',
          tone: 'Bassi con micro-avvolgimento dinamico studiati appositamente per armonizzarsi alla perfezione con la brillantezza dei cantini in carbonio.',
          specs: {
            'Medium Hard': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.6, tensionLbs: 16.8 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.9, tensionLbs: 15.2 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.7, tensionLbs: 14.8 },
            ],
            Hard: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.3, tensionLbs: 18.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.2, tensionLbs: 15.9 },
            ],
          },
        },
        {
          id: 'l_b3',
          name: '900 Golden Superior',
          code: '900',
          material: 'Gold / Ottone (Brass-plated)',
          tone: 'Bassi in speciale lega dorata levigata a specchio. Timbro caldo, rotondo e suonabilità priva di rumori di sfregamento delle dita, ideali per lo studio di registrazione.',
          specs: {
            'Medium Hard': [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.6, tensionLbs: 14.6 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.3, tensionLbs: 13.9 },
            ],
          },
        },
      ],
      tensions: [
        { label: 'Bassa (Light)', code: 'Light', standardLevel: 'Low' },
        { label: 'Media (Medium Hard)', code: 'Medium Hard', standardLevel: 'Normal' },
        { label: 'Alta (Hard)', code: 'Hard', standardLevel: 'High' },
      ],
    },
    {
      id: 'royalclassic',
      name: 'Royal Classic',
      strategyKey: 'ROYAL_CLASSIC',
      trebles: [
        {
          id: 'rc_t1',
          name: 'Futura (Nylon)',
          code: 'Futura',
          material: 'Nylon Tradizionale (Clear)',
          tone: 'Cantini in nylon trasparente di alta precisione. Timbro vellutato, rotondo ed elegante nella più pura tradizione liutaria spagnola.',
          specs: {
            Normal: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.81, gaugeInch: 0.0320, tensionKg: 5.4, tensionLbs: 11.9 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.02, gaugeInch: 0.0400, tensionKg: 5.2, tensionLbs: 11.5 },
            ],
            High: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.8, tensionLbs: 17.2 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.84, gaugeInch: 0.0330, tensionKg: 5.9, tensionLbs: 13.0 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 1.04, gaugeInch: 0.0410, tensionKg: 5.7, tensionLbs: 12.6 },
            ],
          },
        },
        {
          id: 'rc_t2',
          name: 'JG Carbon/Nylon',
          code: 'Carbon/Nylon',
          material: 'Misto / Ibrido',
          tone: 'Set ibrido del Maestro Juan Grecos: 1ª in nylon per dolcezza cantabile, 2ª e 3ª in carbonio per proiezione e brillantezza equilibrata.',
          specs: {
            Normal: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.2, tensionLbs: 15.9 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.69, gaugeInch: 0.0270, tensionKg: 6.0, tensionLbs: 13.2 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.84, gaugeInch: 0.0330, tensionKg: 5.8, tensionLbs: 12.8 },
            ],
            High: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.8, tensionLbs: 17.2 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 6.5, tensionLbs: 14.3 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 6.2, tensionLbs: 13.7 },
            ],
          },
        },
        {
          id: 'rc_t3',
          name: 'JG Titanium/Carbon',
          code: 'Titanium/Carbon',
          material: 'Titanio (Titanium Nylon)',
          tone: 'Configurazione da concerto: 1ª e 2ª in titanio per definizione e corpo, 3ª in carbonio per una chiarezza brillante e risonante.',
          specs: {
            High: [
              { stringNumber: 1, note: '1ª Mi (E1)', gaugeMm: 0.71, gaugeInch: 0.0280, tensionKg: 7.7, tensionLbs: 17.0 },
              { stringNumber: 2, note: '2ª Si (B2)', gaugeMm: 0.84, gaugeInch: 0.0330, tensionKg: 5.8, tensionLbs: 12.8 },
              { stringNumber: 3, note: '3ª Sol (G3)', gaugeMm: 0.86, gaugeInch: 0.0340, tensionKg: 6.2, tensionLbs: 13.7 },
            ],
          },
        },
      ],
      basses: [
        {
          id: 'rc_b1',
          name: 'Sonata (SN)',
          code: 'SN',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi argentati a grande spessore sonoro. Timbro rotondo, pieno e pastoso con finitura anti-ossidante brevettata.',
          specs: {
            Normal: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.6, tensionLbs: 14.6 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.3, tensionLbs: 13.9 },
            ],
            High: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.0, tensionLbs: 17.6 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.3, tensionLbs: 16.1 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.0, tensionLbs: 15.4 },
            ],
          },
        },
        {
          id: 'rc_b2',
          name: 'Dynamic Silver (DS)',
          code: 'DS',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Bassi placcati con spesso strato di argento puro. Risposta limpida, armonicamente ricca, con grande dinamica e lunga durata.',
          specs: {
            Normal: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.74, gaugeInch: 0.0290, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.89, gaugeInch: 0.0350, tensionKg: 6.7, tensionLbs: 14.8 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.09, gaugeInch: 0.0430, tensionKg: 6.4, tensionLbs: 14.1 },
            ],
            High: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.1, tensionLbs: 17.9 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.4, tensionLbs: 16.3 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.1, tensionLbs: 15.7 },
            ],
          },
        },
        {
          id: 'rc_b3',
          name: 'JG Soloist Basses',
          code: 'JG',
          material: 'Composito (Silver-plated)',
          tone: 'Bassi per concertisti con tecnologia Dynamic Sound. Massima tenuta dinamica sotto attacchi energici, timbro autorevole e sustain prolungato.',
          specs: {
            High: [
              { stringNumber: 4, note: '4ª Re (D4)', gaugeMm: 0.76, gaugeInch: 0.0300, tensionKg: 8.2, tensionLbs: 18.1 },
              { stringNumber: 5, note: '5ª La (A5)', gaugeMm: 0.91, gaugeInch: 0.0360, tensionKg: 7.5, tensionLbs: 16.5 },
              { stringNumber: 6, note: '6ª Mi (E6)', gaugeMm: 1.12, gaugeInch: 0.0440, tensionKg: 7.2, tensionLbs: 15.9 },
            ],
          },
        },
      ],
      tensions: [
        { label: 'Media (Normal)', code: 'Normal', standardLevel: 'Normal' },
        { label: 'Alta (High / HT)', code: 'High', standardLevel: 'High' },
      ],
    },
  ],
  decisionMatrix: [
    {
      id: 'dm_1',
      toneGoal: 'Suono tradizionale, caldo, rotondo e morbido',
      trebleMat: 'Nylon Tradizionale (Clear)',
      bassMat: 'Nylon / Argento (Silver-plated)',
      tension: 'Media (Normal / Medium)',
      recommendations: {
        savarez: '500CR / 520R Corum Rouge',
        daddario: 'EJ45 Pro-Arté Clear Nylon',
        augustine: 'Classic Red',
        labella: '2001 Medium Hard',
        royalclassic: 'Sonata Normal',
      },
    },
    {
      id: 'dm_2',
      toneGoal: 'Suono tradizionale con maggiore proiezione, attacco e definizione',
      trebleMat: 'Nylon Tradizionale (Clear)',
      bassMat: 'Nylon / Argento (Silver-plated)',
      tension: 'Alta (High / Hard)',
      recommendations: {
        savarez: '540CR / 500CJ Corum Jaune',
        daddario: 'EJ46 Pro-Arté Hard',
        augustine: 'Imperial Blue / Regal Blue',
        labella: '2001 Hard',
        royalclassic: 'Sonata High',
      },
    },
    {
      id: 'dm_3',
      toneGoal: 'Suono moderno brillante, penetrante, massima proiezione e sustain (Carbonio)',
      trebleMat: 'Carbonio (Fluorocarbonio)',
      bassMat: 'Composito (Silver-plated)',
      tension: 'Alta (High / Hard)',
      recommendations: {
        savarez: '510AJP Cantiga Premium Alliance',
        daddario: 'EJ46FF Carbon Dynacore',
        augustine: 'Paragon Blue',
        labella: 'Vivace Hard / 150F',
        royalclassic: 'JG Carbon/Nylon High',
      },
    },
    {
      id: 'dm_4',
      toneGoal: 'Brillante e trasparente ma morbido (Titanio / Dynacore)',
      trebleMat: 'Titanio (Titanium Nylon)',
      bassMat: 'Dynacore (Silver-plated)',
      tension: 'Media (Normal / Medium)',
      recommendations: {
        savarez: '510MRP Cantiga Premium Creation',
        daddario: 'EJ45TT Titanium Dynacore',
        augustine: 'Imperial Red (Custom)',
        labella: 'Vivace Medium Hard',
        royalclassic: 'JG Titanium/Carbon High',
      },
    },
    {
      id: 'dm_5',
      toneGoal: 'Bassi autorevoli e proiettati con cantini caldi (Composito + Nylon)',
      trebleMat: 'Nylon Tradizionale (Clear)',
      bassMat: 'Composito (Silver-plated)',
      tension: 'Media (Normal / Medium)',
      recommendations: {
        savarez: '510CR Cantiga New Cristal / 510CRP Premium',
        daddario: 'EJ45C Pro-Arté Composite',
        augustine: 'Classic Red',
        labella: '2001 Medium Hard',
        royalclassic: 'Sonata Normal',
      },
    },
    {
      id: 'dm_6',
      toneGoal: 'Registrazioni in studio e concerti amplificati senza rumori di sfregamento (Levigati)',
      trebleMat: 'Nylon Tradizionale (Clear)',
      bassMat: 'Levigati / Lisci (Polished)',
      tension: 'Media (Normal / Medium)',
      recommendations: {
        savarez: '510CRH Polished Cantiga New Cristal',
        daddario: 'EJ45LP Lightly Polished Pro-Arté',
        augustine: 'Classic Red',
        labella: '900 Golden Superior',
        royalclassic: 'Sonata Normal',
      },
    },
  ],
};
