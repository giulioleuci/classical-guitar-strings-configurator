import type { INamingStrategy } from '@/domain/contracts';
import type { BassString, TrebleString, TensionOption, Brand, GeneratedSetResult } from '@/domain/types';

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
    const code = `${bassCode}${trebleCode}${tensionCode}`.trim();
    const explanation =
      `Savarez — Codice formato da: Bassi "${bass.name}" (${bassCode}) + ` +
      `Cantini "${treble.name}" (${trebleCode}) + Tensione "${tension.label}" (${tensionCode}). ` +
      `Risultato: ${code}.`;
    return { code, explanation };
  }
}

export class DAddarioStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    const bassCode = bass.code || 'EJ';
    const tensionCode = tension.code || '45';
    const trebleCode = treble.code || '';
    const code = `${bassCode}${tensionCode}${trebleCode}`.trim();
    const explanation =
      `D'Addario — Codice formato da: Serie Bassi "${bass.name}" (${bassCode}) + ` +
      `Tensione "${tension.label}" (${tensionCode}) + Cantini "${treble.name}" (${trebleCode || 'standard'}). ` +
      `Risultato: ${code}.`;
    return { code, explanation };
  }
}

export class AugustineStrategy implements INamingStrategy {
  generateSetName(
    treble: TrebleString,
    bass: BassString,
    _tension: TensionOption,
    _brand: Brand
  ): GeneratedSetResult {
    const trebleName = treble.name || treble.code;
    const bassName = bass.name || bass.code;
    const code = `${trebleName} ${bassName}`.trim();
    const explanation =
      `Augustine — Il nome del set combina il tipo di cantino "${trebleName}" ` +
      `con il colore dei bassi "${bassName}". La tensione è inclusa nel colore dei bassi. ` +
      `Risultato: ${code}.`;
    return { code, explanation };
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
    return { code, explanation };
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
      `Royal Classic — Nome formato da: Serie Commerciale "${seriesName}" + Tensione "${tensionName}". ` +
      `Risultato: ${code}.`;
    return { code, explanation };
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
    return { code, explanation };
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
