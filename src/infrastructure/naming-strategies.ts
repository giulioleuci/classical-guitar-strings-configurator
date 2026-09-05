import type { INamingStrategy } from '@/domain/contracts';
import type {
  BassString,
  TrebleString,
  TensionOption,
  Brand,
  GeneratedSetResult,
  StringPhysicalSpec,
} from '@/domain/types';

export function resolveStringSpecs(
  treble: TrebleString,
  bass: BassString,
  tension: TensionOption
): { specs: StringPhysicalSpec[]; totalTensionKg: number; totalTensionLbs: number } {
  const findSpecs = (
    stringObj: TrebleString | BassString,
    tensionCode: string,
    tensionLabel: string
  ): StringPhysicalSpec[] => {
    if (!stringObj.specs) return [];
    const keys = Object.keys(stringObj.specs);
    if (keys.length === 0) return [];

    // Exact key match (e.g. 'R', '45', 'Normal', 'High')
    if (stringObj.specs[tensionCode]) return stringObj.specs[tensionCode];
    if (stringObj.specs[tensionLabel]) return stringObj.specs[tensionLabel];

    // Case-insensitive or partial match
    const lowerCode = tensionCode.toLowerCase();
    const lowerLabel = tensionLabel.toLowerCase();
    const matchedKey = keys.find(
      (k) =>
        k.toLowerCase() === lowerCode ||
        k.toLowerCase() === lowerLabel ||
        lowerLabel.includes(k.toLowerCase()) ||
        k.toLowerCase().includes(lowerCode)
    );
    if (matchedKey && stringObj.specs[matchedKey]) {
      return stringObj.specs[matchedKey];
    }

    // Default to first available
    return stringObj.specs[keys[0]] || [];
  };

  const trebleSpecs = findSpecs(treble, tension.code, tension.label);
  const bassSpecs = findSpecs(bass, tension.code, tension.label);

  const combinedSpecs: StringPhysicalSpec[] = [...trebleSpecs, ...bassSpecs].sort(
    (a, b) => a.stringNumber - b.stringNumber
  );

  const totalTensionKg = combinedSpecs.reduce((acc, s) => acc + (s.tensionKg || 0), 0);
  const totalTensionLbs = combinedSpecs.reduce((acc, s) => acc + (s.tensionLbs || 0), 0);

  return {
    specs: combinedSpecs,
    totalTensionKg: Math.round(totalTensionKg * 10) / 10,
    totalTensionLbs: Math.round(totalTensionLbs * 10) / 10,
  };
}

export class SavarezStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    const bassCode = bass.code || '';
    const trebleCode = treble.code || '';
    const tensionCode = tension.code || '';

    let code = `${bassCode}${trebleCode}${tensionCode}`;
    if (bassCode.endsWith('P')) {
      const base = bassCode.slice(0, -1);
      code = `${base}${trebleCode}${tensionCode}P`;
    } else if (bassCode.endsWith('H')) {
      const base = bassCode.slice(0, -1);
      code = `${base}${trebleCode}${tensionCode}H`;
    }
    code = code.trim();

    const explanation =
      `Savarez — Codice formato da: Bassi "${bass.name}" (${bassCode}) + ` +
      `Cantini "${treble.name}" (${trebleCode}) + Tensione "${tension.label}" (${tensionCode}). ` +
      `Risultato: ${code}.`;
    const resolved = resolveStringSpecs(treble, bass, tension);
    return { code, explanation, ...resolved };
  }
}

export class DAddarioStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    let bassCode = bass.code || 'EJ';
    const tensionCode = tension.code || '45';
    let trebleCode = treble.code || '';

    // Handle XT series (e.g. XTC45 / XTC45FF)
    if (bass.id === 'd_b4' || bass.code === 'XTC' || bass.name.includes('XT')) {
      bassCode = 'XTC';
    } else if (bass.id === 'd_b5' || bass.name.includes('Polished') || (bass.material && bass.material.includes('Levigati'))) {
      if (!trebleCode) trebleCode = 'LP';
      else trebleCode = `${trebleCode}LP`;
    } else if (bass.id === 'd_b2' || bass.name.includes('Composite Core') || (bass.material && bass.material.includes('Composito'))) {
      // Composite Core series uses 'C' suffix (e.g. EJ45C)
      if (!trebleCode) trebleCode = 'C';
    } else if (bass.id === 'd_b3' || bass.name.includes('Dynacore')) {
      // Dynacore series retains normal codes combined with trebles like FF or TT (e.g. EJ45TT, EJ46FF)
    }

    let code = `${bassCode}${tensionCode}${trebleCode}`.trim();
    if (treble.code === 'R' && bassCode === 'EJ') {
      if (tensionCode === '45') code = 'EJ30';
      else if (tensionCode === '46') code = 'EJ31';
      else if (tensionCode === '44') code = 'EJ29';
    } else if (treble.code === 'B' && bassCode === 'EJ') {
      if (tensionCode === '45') code = 'EJ49';
      else if (tensionCode === '46') code = 'EJ50';
    }

    const explanation =
      `D'Addario — Codice formato da: Serie Bassi "${bass.name}" (${bassCode}) + ` +
      `Tensione "${tension.label}" (${tensionCode}) + Cantini "${treble.name}" (${treble.code || 'Clear Nylon standard'}). ` +
      `Risultato: ${code}.`;
    const resolved = resolveStringSpecs(treble, bass, tension);
    return { code, explanation, ...resolved };
  }
}

export class AugustineStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    const trebleName = treble.name || treble.code;
    const bassName = bass.name || bass.code;
    const code = `${trebleName} ${bassName}`.trim();
    const explanation =
      `Augustine — Il set combina la tipologia di cantini "${trebleName}" ` +
      `con la calibratura cromatica dei bassi "${bassName}". ` +
      `Risultato: ${code}.`;
    const resolved = resolveStringSpecs(treble, bass, tension);
    return { code, explanation, ...resolved };
  }
}

export class LaBellaStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    const seriesCode = bass.code || treble.code || '';
    const tensionName = tension.code || tension.label;
    const code = `${seriesCode} ${tensionName}`.trim();
    const explanation =
      `La Bella — Codice formato da: Serie "${seriesCode}" + Tensione "${tensionName}". ` +
      `Risultato: ${code}.`;
    const resolved = resolveStringSpecs(treble, bass, tension);
    return { code, explanation, ...resolved };
  }
}

export class RoyalClassicStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    const seriesName = treble.name || treble.code || bass.name;
    const tensionName = tension.code || tension.label;
    const code = `${seriesName} ${tensionName}`.trim();
    const explanation =
      `Royal Classic — Nome formato da: Serie "${seriesName}" + Tensione "${tensionName}". ` +
      `Risultato: ${code}.`;
    const resolved = resolveStringSpecs(treble, bass, tension);
    return { code, explanation, ...resolved };
  }
}

export class GenericStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    brand: Brand
  ): GeneratedSetResult {
    const code = `${brand.name} — ${treble.name} / ${bass.name} (${tension.label})`.trim();
    const explanation =
      `Set personalizzato per ${brand.name}: Cantini "${treble.name}" + ` +
      `Bassi "${bass.name}" + Tensione "${tension.label}".`;
    const resolved = resolveStringSpecs(treble, bass, tension);
    return { code, explanation, ...resolved };
  }
}

export function getNamingStrategy(strategyKey: string): INamingStrategy {
  switch (strategyKey) {
    case 'SAVAREZ':
      return new SavarezStrategy();
    case 'DADDARIO':
      return new DAddarioStrategy();
    case 'AUGUSTINE':
      return new AugustineStrategy();
    case 'LABELLA':
      return new LaBellaStrategy();
    case 'ROYAL_CLASSIC':
      return new RoyalClassicStrategy();
    default:
      return new GenericStrategy();
  }
}

