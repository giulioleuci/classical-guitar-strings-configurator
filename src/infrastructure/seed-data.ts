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
          tone: 'Top quality clear nylon trebles called New Cristal. The high characteristics of this nylon give the string its rich, beautiful and clear sound. An excellent and colorful combination with the Cantiga bass strings.',
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
          tone: 'Composite Alliance trebles, acclaimed for their unique brilliance and sound projection. A fantastic and responsive mix with the Cantiga bass strings.',
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
          tone: 'Set combining the advantages of nylon for the E.1 and B.2 treble strings (New Cristal) and of Alliance composite for the G.3 string. Ensures a perfect homogeneity and transition between the strings, and a clear sound with a generous tone.',
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
          tone: 'Flessibilità eccellente, grande dinamica e risposta facile',
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
          tone: 'Cantiga wound strings. The newest Savarez basses increasing your playing sensations. New high-tech materials offering outstanding colors of sound, fast and precise response, incredibly easy playing.',
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
          tone: 'The new Cantiga Premium basses come from the discovery of a new high-performance metal and new raw materials that give them new and very significant characteristics. This metal is associated and wound with the exclusive Cantiga core that have made their worldwide success. They offer an amazing presence of the basses, a dense and deep sound which remain perfectly balanced with the trebles strings. The enriched overtones spectrum offers a bright sound without aggressivity. Extended life and a quick and easy answer in pianissimo as in fortissimo without saturation.',
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
          id: 's_b4',
          name: 'HT Classic',
          code: '540',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'Attacco rapido, suono aperto e brillante ideale per repertorio concertistico',
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
          tone: 'Timbro storico morbido, suono vellutato della scuola francese',
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
          tone: 'The original D\'Addario trebles, offering a true-sounding traditional tone with consistent precise intonation.',
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
          tone: 'Ideal combination of tension with a modern, bright, and projecting tone and an unmatched superior intonation not found in other fluorocarbon strings.',
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
          tone: 'Smooth feel comparable to standard nylon, with a distinctive brighter tone and increased projection.',
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
      ],
      basses: [
        {
          id: 'd_b1',
          name: 'Nylon Core (Standard)',
          code: 'EJ',
          material: 'Nylon / Argento (Silver-plated)',
          tone: 'The original D\'Addario basses with a multi-filament nylon core for a warm and full-bodied tone.',
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
          tone: 'Exclusive multi-filament core with a powerful, warm tone that lasts 2-3 times longer than traditional strings.',
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
          tone: 'Revolutionary twist process on a composite core yields unparalleled intonation, a flexible core with greater projection, and a bold, powerful tone.',
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
          tone: 'Micro-fine coating with a transparent tone and natural feel that lasts four times longer than uncoated strings.',
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
          tone: 'Timbro storico caldo e pastoso sviluppato con Andrés Segovia',
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
          tone: 'Alta tensione dei cantini per maggiore attacco, definizione e brillantezza',
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
          tone: 'Extra-alta tensione dei cantini, tocco rigido e massima resistenza',
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
          tone: 'Fluorocarbonio moderno, brillante e penetrante per concertisti',
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
          tone: 'Tensione leggera, bassi caldi e tocco morbido per strumenti delicati',
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
          tone: 'Media tensione bilanciata, lo standard storico Augustine',
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
          tone: 'Alta tensione dei bassi, massima proiezione e risonanza',
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
          tone: 'Avvolgimento in ottone dorato, suono rotondo e caldo',
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
          tone: 'Concert grade, eccellente purezza di intonazione e calore',
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
          tone: 'Fluorocarbonio ad alta reattività con timbro brillante e ricco',
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
          tone: 'Altissima densità e penetrazione per solisti da concerto',
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
          tone: 'Risposta fluida, ottimo sustain e intonazione equilibrata',
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
          tone: 'Progettati con micro-avvolgimento per bilanciarsi con cantini in carbonio',
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
          tone: 'Bassi in lega dorata, caldi e risonanti con tocco setoso',
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
          tone: 'Vellutato, rotondo ed elegante nella tradizione liutaria spagnola',
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
          tone: 'Sviluppato con Jorge Morel: 1ª Nylon, 2ª e 3ª Carbonio per equilibrio',
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
          tone: '1ª e 2ª Titanio ad alta definizione, 3ª Carbonio brillante',
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
          tone: 'Bassi rotondi, argentati e stabili per repertorio classico',
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
          tone: 'Elevato spessore di placcatura in argento puro per bassi limpidi',
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
          tone: 'Progettati per chitarristi da concerto con massima tenuta di dinamica',
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
        daddario: 'EJ45 Pro-Arté',
        augustine: 'Classic Red',
        labella: '2001 Medium Hard',
        royalclassic: 'Sonata Normal',
      },
    },
    {
      id: 'dm_2',
      toneGoal: 'Suono tradizionale con maggiore proiezione e risposta netta',
      trebleMat: 'Nylon Tradizionale (Clear)',
      bassMat: 'Nylon / Argento (Silver-plated)',
      tension: 'Alta (High / Hard)',
      recommendations: {
        savarez: '540CR / 500CJ Corum Jaune',
        daddario: 'EJ46 Pro-Arté Hard',
        augustine: 'Classic Blue / Imperial Blue',
        labella: '2001 Hard',
        royalclassic: 'Sonata High',
      },
    },
    {
      id: 'dm_3',
      toneGoal: 'Suono brillante, moderno, massima proiezione e sustain (Carbonio)',
      trebleMat: 'Carbonio (Fluorocarbonio)',
      bassMat: 'Dynacore (Silver-plated)',
      tension: 'Alta (High / Hard)',
      recommendations: {
        savarez: '510AJ Cantiga Alliance / 510AJP Premium',
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
      toneGoal: 'Risposta dei bassi elevata con timbro audace e proiettato (Composito)',
      trebleMat: 'Nylon Tradizionale (Clear)',
      bassMat: 'Composito (Silver-plated)',
      tension: 'Media (Normal / Medium)',
      recommendations: {
        savarez: '510CR Cantiga',
        daddario: 'EJ45C Pro-Arté Composite',
        augustine: 'Classic Red',
        labella: '2001 Medium Hard',
        royalclassic: 'Sonata Normal',
      },
    },
  ],
};

