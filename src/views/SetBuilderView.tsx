import { useMemo, useState } from 'react';
import { Copy, Save, Check, Gauge, Scale, Sparkles } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import type { Brand, BassString, TrebleString, TensionOption } from '@/domain/types';

// Plain single monofilament string for trebles (cantini: smooth nylon/carbon)
export function GuitarTrebleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 19L20 5" strokeWidth="1.5" />
      <circle cx="4" cy="19" r="1.5" fill="currentColor" />
      <circle cx="20" cy="5" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Wound string for basses (bassi: silver/gold coiled winding texture)
export function GuitarBassIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 21L21 3" strokeWidth="3" strokeDasharray="1.5 2.5" />
      <circle cx="3" cy="21" r="1.75" fill="currentColor" />
      <circle cx="21" cy="3" r="1.75" fill="currentColor" />
    </svg>
  );
}

export function SetBuilderView() {
  const lab = useStringLab();
  const { toast } = useToast();
  const brands = lab.brands || [];

  const [brandId, setBrandId] = useState<string>('');
  const [trebleId, setTrebleId] = useState<string>('');
  const [bassId, setBassId] = useState<string>('');
  const [tensionIdx, setTensionIdx] = useState<number>(0);
  const [unitMode, setUnitMode] = useState<'both' | 'metric' | 'imperial'>('both');
  const [copied, setCopied] = useState(false);

  const brand: Brand | undefined = brands.find((b) => b.id === brandId) || brands[0];
  const treble: TrebleString | undefined = brand?.trebles.find((t) => t.id === trebleId) || brand?.trebles[0];
  const bass: BassString | undefined = brand?.basses.find((b) => b.id === bassId) || brand?.basses[0];
  const tension: TensionOption | undefined = brand?.tensions[tensionIdx] || brand?.tensions[0];

  const result = useMemo(() => {
    if (!brand || !treble || !bass || !tension) return null;
    return lab.generateSetCode(brand, treble, bass, tension);
  }, [brand, treble, bass, tension, lab]);

  if (!brands.length) {
    return (
      <div className="flex items-center justify-center py-20 font-serif italic text-muted-foreground">
        Caricamento del laboratorio corde...
      </div>
    );
  }

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: 'Codice copiato negli appunti', description: result.code });
    } catch {
      toast({ title: 'Copia non riuscita', description: 'Impossibile accedere agli appunti.', variant: 'destructive' });
    }
  };

  const handleSave = async () => {
    if (!result || !brand || !treble || !bass || !tension) return;
    await lab.saveSet({
      brandId: brand.id,
      brandName: brand.name,
      trebleId: treble.id,
      trebleName: treble.name,
      bassId: bass.id,
      bassName: bass.name,
      tensionLabel: tension.label,
      generatedCode: result.code,
      explanation: result.explanation,
      totalTensionKg: result.totalTensionKg,
      totalTensionLbs: result.totalTensionLbs,
      createdAt: Date.now(),
    });
    toast({ title: 'Set salvato con successo', description: 'Consultabile nella sezione Salvati.' });
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Title */}
      <div className="space-y-1">
        <h2 className="font-display text-2xl font-bold tracking-tight text-[#2a1810]">
          Set Builder
        </h2>
        <p className="font-serif text-sm italic text-muted-foreground text-balance">
          Combina cantini, bassi e tensioni per generare il set e analizzarne calibro e tensione.
        </p>
      </div>

      {/* Brand selector */}
      <div className="space-y-2.5">
        <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          1. Produttore / Marchio
        </Label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
          {brands.map((b) => {
            const isSelected = (brand?.id || brands[0].id) === b.id;
            return (
              <button
                key={b.id}
                onClick={() => {
                  setBrandId(b.id);
                  setTrebleId('');
                  setBassId('');
                  setTensionIdx(0);
                }}
                className={`rounded-xl border px-3 py-2.5 text-center text-sm font-semibold transition-all duration-150 active:scale-[0.97] shadow-xs ${
                  isSelected
                    ? 'border-primary bg-primary text-white shadow-md shadow-primary/20 ring-1 ring-primary/30'
                    : 'border-stone-200/80 bg-card text-[#2a1810] hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                {b.name}
              </button>
            );
          })}
        </div>
      </div>

      {brand && (
        <>
          {/* Treble selector */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                2. Cantini (Trebles: 1ª - 2ª - 3ª)
              </Label>
              <span className="text-xs font-serif italic text-muted-foreground">
                {brand.trebles.length} varianti disponibili
              </span>
            </div>
            <div className="max-h-[292px] overflow-y-auto overscroll-contain rounded-2xl border border-stone-200/80 bg-card/80 p-2 shadow-xs backdrop-blur-xs">
              <div className="space-y-1.5">
                {brand.trebles.map((t) => {
                  const isSelected = (treble?.id || brand.trebles[0]?.id) === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTrebleId(t.id)}
                      className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all duration-150 active:scale-[0.99] ${
                        isSelected
                          ? 'bg-amber-100/50 ring-1 ring-primary/60 border-transparent shadow-xs'
                          : 'hover:bg-muted/50 border border-transparent'
                      }`}
                    >
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isSelected ? 'bg-primary text-white shadow-xs' : 'bg-primary/10 text-primary'
                      }`}>
                        <GuitarTrebleIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-sm font-bold text-[#2a1810] block">{t.name}</span>
                        <p className="text-xs font-medium text-primary/90">{t.material}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{t.tone}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bass selector */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                3. Bassi (Basses: 4ª - 5ª - 6ª)
              </Label>
              <span className="text-xs font-serif italic text-muted-foreground">
                {brand.basses.length} varianti disponibili
              </span>
            </div>
            <div className="max-h-[292px] overflow-y-auto overscroll-contain rounded-2xl border border-stone-200/80 bg-card/80 p-2 shadow-xs backdrop-blur-xs">
              <div className="space-y-1.5">
                {brand.basses.map((b) => {
                  const isSelected = (bass?.id || brand.basses[0]?.id) === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setBassId(b.id)}
                      className={`flex w-full items-start gap-3 rounded-xl p-3 text-left transition-all duration-150 active:scale-[0.99] ${
                        isSelected
                          ? 'bg-amber-100/50 ring-1 ring-primary/60 border-transparent shadow-xs'
                          : 'hover:bg-muted/50 border border-transparent'
                      }`}
                    >
                      <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isSelected ? 'bg-primary text-white shadow-xs' : 'bg-primary/10 text-primary'
                      }`}>
                        <GuitarBassIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-sm font-bold text-[#2a1810] block">{b.name}</span>
                        <p className="text-xs font-medium text-primary/90">{b.material}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1">{b.tone}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tension selector */}
          <div className="space-y-2.5">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              4. Tensione Desiderata
            </Label>
            <div className="flex flex-wrap gap-2">
              {brand.tensions.map((t, i) => {
                const isSelected = (tensionIdx || 0) === i;
                return (
                  <button
                    key={`${t.label}-${i}`}
                    onClick={() => setTensionIdx(i)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-150 active:scale-95 shadow-xs ${
                      isSelected
                        ? 'border-primary bg-primary text-white shadow-sm shadow-primary/20 ring-1 ring-primary/30'
                        : 'border-stone-200/80 bg-card text-[#2a1810] hover:border-primary/40 hover:bg-primary/5'
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Result Card */}
          {result && (
            <Card className="overflow-hidden border-primary/30 bg-gradient-to-b from-card to-amber-50/40 shadow-md shadow-stone-900/5 ring-1 ring-stone-900/5">
              <CardHeader className="border-b border-stone-200/60 bg-primary/5 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <CardTitle className="font-display text-lg font-bold tracking-tight text-[#2a1810]">
                      Codice Set & Specifiche Tecniche
                    </CardTitle>
                  </div>
                  {result.totalTensionKg !== undefined && result.totalTensionKg > 0 && (
                    <Badge variant="outline" className="border-primary/40 bg-background/90 text-primary font-semibold tabular-nums shadow-xs">
                      <Scale className="mr-1.5 h-3.5 w-3.5" />
                      Tensione Totale: {result.totalTensionKg} kg ({result.totalTensionLbs} lbs)
                    </Badge>
                  )}
                </div>
                <CardDescription className="font-serif italic text-muted-foreground">
                  Configurazione per scala standard 650 mm e diapason classico A440
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-5 p-5">
                {/* Code display */}
                <div className="relative flex flex-col items-center justify-center rounded-2xl border border-primary/25 bg-background/90 p-5 text-center shadow-inner ring-1 ring-primary/10">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    {brand.name}
                  </span>
                  <code className="font-display text-3xl font-extrabold tracking-wide text-primary selection:bg-primary/20">
                    {result.code}
                  </code>
                </div>

                {/* Technical explanation */}
                <div className="space-y-1 rounded-xl bg-muted/40 p-3.5 text-xs border border-stone-200/60">
                  <p className="font-semibold uppercase tracking-wider text-muted-foreground text-[10px]">
                    Composizione & Nomenclatura
                  </p>
                  <p className="leading-relaxed text-[#2a1810]">
                    {result.explanation}
                  </p>
                </div>

                {/* 6-String Gauge & Tension Table */}
                {result.specs && result.specs.length > 0 && (
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2a1810]">
                        <Gauge className="h-4 w-4 text-primary" />
                        Calibro & Tensione Corde Singole
                      </div>
                      <div className="flex items-center gap-1 rounded-lg border border-stone-200/80 bg-muted/50 p-0.5 text-[11px]">
                        <button
                          onClick={() => setUnitMode('both')}
                          className={`rounded px-2 py-0.5 font-medium transition-all ${
                            unitMode === 'both' ? 'bg-background text-primary shadow-xs' : 'text-muted-foreground'
                          }`}
                        >
                          Tutte
                        </button>
                        <button
                          onClick={() => setUnitMode('metric')}
                          className={`rounded px-2 py-0.5 font-medium transition-all ${
                            unitMode === 'metric' ? 'bg-background text-primary shadow-xs' : 'text-muted-foreground'
                          }`}
                        >
                          mm / kg
                        </button>
                        <button
                          onClick={() => setUnitMode('imperial')}
                          className={`rounded px-2 py-0.5 font-medium transition-all ${
                            unitMode === 'imperial' ? 'bg-background text-primary shadow-xs' : 'text-muted-foreground'
                          }`}
                        >
                          in / lbs
                        </button>
                      </div>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-stone-200/80 bg-background shadow-xs">
                      <table className="w-full text-left text-xs tabular-nums">
                        <thead>
                          <tr className="border-b border-stone-200/70 bg-muted/40 text-[11px] font-semibold text-muted-foreground">
                            <th className="py-2.5 px-3">Corda</th>
                            {(unitMode === 'both' || unitMode === 'metric') && (
                              <th className="py-2.5 px-3 text-right font-medium">Diametro (mm)</th>
                            )}
                            {(unitMode === 'both' || unitMode === 'imperial') && (
                              <th className="py-2.5 px-3 text-right font-medium">Calibro (inch)</th>
                            )}
                            {(unitMode === 'both' || unitMode === 'metric') && (
                              <th className="py-2.5 px-3 text-right font-medium">Tensione (kg)</th>
                            )}
                            {(unitMode === 'both' || unitMode === 'imperial') && (
                              <th className="py-2.5 px-3 text-right font-medium">Tensione (lbs)</th>
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200/50">
                          {result.specs.map((s) => (
                            <tr
                              key={s.stringNumber}
                              className={`hover:bg-muted/30 transition-colors ${
                                s.stringNumber <= 3 ? 'bg-background' : 'bg-primary/[0.02]'
                              }`}
                            >
                              <td className="py-2 px-3 font-semibold text-[#2a1810]">
                                {s.note}
                              </td>
                              {(unitMode === 'both' || unitMode === 'metric') && (
                                <td className="py-2 px-3 text-right font-mono text-muted-foreground">
                                  {s.gaugeMm.toFixed(2)} <span className="text-[10px] text-muted-foreground/70 font-sans">mm</span>
                                </td>
                              )}
                              {(unitMode === 'both' || unitMode === 'imperial') && (
                                <td className="py-2 px-3 text-right font-mono text-muted-foreground">
                                  .{s.gaugeInch.toFixed(4).replace('0.', '')}<span className="text-[10px] text-muted-foreground/70 font-sans">"</span>
                                </td>
                              )}
                              {(unitMode === 'both' || unitMode === 'metric') && (
                                <td className="py-2 px-3 text-right font-mono font-medium text-primary">
                                  {s.tensionKg.toFixed(1)} <span className="text-[10px] text-primary/70 font-sans">kg</span>
                                </td>
                              )}
                              {(unitMode === 'both' || unitMode === 'imperial') && (
                                <td className="py-2 px-3 text-right font-mono font-medium text-primary">
                                  {s.tensionLbs.toFixed(1)} <span className="text-[10px] text-primary/70 font-sans">lbs</span>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                        {result.totalTensionKg !== undefined && (
                          <tfoot>
                            <tr className="border-t border-stone-200 font-bold bg-primary/5 text-[#2a1810]">
                              <td className="py-2 px-3 font-display">Totale Set</td>
                              {(unitMode === 'both' || unitMode === 'metric') && (
                                <td className="py-2 px-3 text-right text-muted-foreground">—</td>
                              )}
                              {(unitMode === 'both' || unitMode === 'imperial') && (
                                <td className="py-2 px-3 text-right text-muted-foreground">—</td>
                              )}
                              {(unitMode === 'both' || unitMode === 'metric') && (
                                <td className="py-2 px-3 text-right font-mono text-primary font-bold">
                                  {result.totalTensionKg.toFixed(1)} <span className="text-[10px] font-sans">kg</span>
                                </td>
                              )}
                              {(unitMode === 'both' || unitMode === 'imperial') && (
                                <td className="py-2 px-3 text-right font-mono text-primary font-bold">
                                  {result.totalTensionLbs?.toFixed(1)} <span className="text-[10px] font-sans">lbs</span>
                                </td>
                              )}
                            </tr>
                          </tfoot>
                        )}
                      </table>
                    </div>
                  </div>
                )}

                <Separator className="bg-stone-200/60" />

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    onClick={handleCopy}
                    className="flex-1 bg-primary hover:bg-[#b0451e] text-white shadow-sm font-semibold transition-all duration-150 active:scale-[0.98]"
                  >
                    {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? 'Copiato' : 'Copia codice'}
                  </Button>
                  <Button
                    onClick={handleSave}
                    variant="outline"
                    className="flex-1 border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-[0.98]"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Salva configurazione
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

