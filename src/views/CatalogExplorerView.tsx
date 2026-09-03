import { useMemo, useState } from 'react';
import { Layers, Gauge, Scale, ChevronDown, ChevronUp } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { GuitarTrebleIcon, GuitarBassIcon } from '@/views/SetBuilderView';
import type { Brand, TrebleString, BassString } from '@/domain/types';

const MATERIAL_COLORS: Record<string, { badge: string }> = {
  'Nylon Tradizionale (Clear)': { badge: 'text-amber-950 border-amber-800/30 bg-amber-700/10' },
  'Carbonio (Fluorocarbonio)': { badge: 'text-sky-950 border-sky-800/30 bg-sky-700/10' },
  'Titanio (Titanium Nylon)': { badge: 'text-purple-950 border-purple-800/30 bg-purple-700/10' },
  'Nylon Rettificato': { badge: 'text-emerald-950 border-emerald-800/30 bg-emerald-700/10' },
  'Misto / Ibrido': { badge: 'text-primary border-primary/30 bg-primary/10' },
  'Nylon / Argento (Silver-plated)': { badge: 'text-stone-900 border-stone-600/30 bg-stone-500/10' },
  'Composito / Dynacore (Silver-plated)': { badge: 'text-cyan-950 border-cyan-800/30 bg-cyan-700/10' },
  'Gold / Ottone (Brass-plated)': { badge: 'text-amber-900 border-amber-600/30 bg-amber-500/10' },
  'Levigati / Lisci (Polished)': { badge: 'text-indigo-950 border-indigo-800/30 bg-indigo-700/10' },
};

function getMaterialStyle(mat: string): string {
  return MATERIAL_COLORS[mat]?.badge || 'text-muted-foreground border-stone-200 bg-muted/60';
}

function StringCard({ stringObj, type }: { stringObj: TrebleString | BassString; type: 'treble' | 'bass' }) {
  const [showSpecs, setShowSpecs] = useState(false);
  const specsEntries = Object.entries(stringObj.specs || {});
  const hasSpecs = specsEntries.length > 0;

  return (
    <Card className="overflow-hidden border-stone-200/80 bg-card/95 shadow-xs transition-all duration-150 hover:border-primary/40 backdrop-blur-xs">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {type === 'treble' ? <GuitarTrebleIcon className="h-4 w-4" /> : <GuitarBassIcon className="h-4 w-4" />}
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#2a1810]">{stringObj.name}</h4>
              <p className="text-xs text-muted-foreground">{stringObj.tone}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-200/50">
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium shadow-2xs ${getMaterialStyle(stringObj.material)}`}>
            {stringObj.material}
          </span>

          {hasSpecs && (
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="flex items-center gap-1 text-[11px] font-semibold text-primary hover:text-[#963b18] transition-colors active:scale-95 duration-150"
            >
              <Gauge className="h-3.5 w-3.5" />
              <span>{showSpecs ? 'Nascondi calibri' : 'Vedi calibri & tensioni'}</span>
              {showSpecs ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>

        {/* Expandable specs table */}
        {showSpecs && hasSpecs && (
          <div className="space-y-3 pt-2">
            {specsEntries.map(([tensionKey, strings]) => (
              <div key={tensionKey} className="rounded-xl border border-stone-200/70 bg-background/90 p-3 space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-primary">Tensione: {tensionKey}</span>
                  <span className="text-muted-foreground font-mono tabular-nums">
                    Tot. parziale: {strings.reduce((a, b) => a + (b.tensionKg || 0), 0).toFixed(1)} kg
                  </span>
                </div>
                <div className="overflow-x-auto rounded-lg border border-stone-200/60 bg-card/60">
                  <table className="w-full text-left text-[11px] tabular-nums">
                    <thead>
                      <tr className="border-b border-stone-200/60 text-muted-foreground bg-muted/40 font-semibold">
                        <th className="py-1.5 px-2.5">Corda</th>
                        <th className="py-1.5 px-2.5 text-right">Diametro</th>
                        <th className="py-1.5 px-2.5 text-right">Tensione (kg)</th>
                        <th className="py-1.5 px-2.5 text-right">Tensione (lbs)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200/40 font-mono">
                      {strings.map((s) => (
                        <tr key={s.stringNumber} className="hover:bg-muted/20 transition-colors">
                          <td className="py-1.5 px-2.5 font-sans font-semibold text-[#2a1810]">{s.note}</td>
                          <td className="py-1.5 px-2.5 text-right text-muted-foreground">{s.gaugeMm.toFixed(2)} mm (.{s.gaugeInch.toFixed(4).replace('0.', '')}")</td>
                          <td className="py-1.5 px-2.5 text-right font-medium text-primary">{s.tensionKg.toFixed(1)} kg</td>
                          <td className="py-1.5 px-2.5 text-right text-muted-foreground">{s.tensionLbs.toFixed(1)} lbs</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function BrandCatalog({ brand }: { brand: Brand }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Layers className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-bold tracking-tight text-[#2a1810]">{brand.name}</h3>
      </div>

      <Tabs defaultValue="trebles" className="space-y-3">
        <TabsList className="w-full bg-muted/70 p-1 rounded-xl border border-stone-200/70">
          <TabsTrigger value="trebles" className="flex-1 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-xs font-semibold text-xs transition-all">
            Cantini ({brand.trebles.length})
          </TabsTrigger>
          <TabsTrigger value="basses" className="flex-1 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-xs font-semibold text-xs transition-all">
            Bassi ({brand.basses.length})
          </TabsTrigger>
          <TabsTrigger value="tensions" className="flex-1 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-xs font-semibold text-xs transition-all">
            Tensioni ({brand.tensions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trebles" className="space-y-2.5">
          {brand.trebles.map((t) => (
            <StringCard key={t.id} stringObj={t} type="treble" />
          ))}
        </TabsContent>

        <TabsContent value="basses" className="space-y-2.5">
          {brand.basses.map((b) => (
            <StringCard key={b.id} stringObj={b} type="bass" />
          ))}
        </TabsContent>

        <TabsContent value="tensions" className="space-y-2.5">
          <Card className="border-stone-200/80 bg-card/95 shadow-xs backdrop-blur-xs">
            <CardContent className="space-y-2.5 p-4">
              {brand.tensions.map((t, i) => (
                <div
                  key={`${t.label}-${i}`}
                  className="flex items-center justify-between rounded-xl border border-stone-200/60 bg-background/80 px-3.5 py-2.5 shadow-2xs"
                >
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-[#2a1810]">{t.label}</span>
                    {t.standardLevel && (
                      <p className="text-xs text-muted-foreground">Scala standard: {t.standardLevel}</p>
                    )}
                  </div>
                  <Badge variant="outline" className="border-primary/30 font-mono text-xs text-primary tabular-nums">
                    {t.code}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function CatalogExplorerView() {
  const lab = useStringLab();
  const brands = lab.brands || [];
  const [activeBrand, setActiveBrand] = useState<string>('');

  const currentBrand = useMemo(
    () => brands.find((b) => b.id === activeBrand) || brands[0],
    [brands, activeBrand]
  );

  if (!brands.length) {
    return <div className="py-20 text-center font-serif italic text-muted-foreground">Caricamento catalogo...</div>;
  }

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-1">
        <h2 className="font-display text-2xl font-bold tracking-tight text-[#2a1810]">
          Catalogo Tecnico
        </h2>
        <p className="font-serif text-sm italic text-muted-foreground text-balance">
          Esplora materiali, calibri (mm/in) e tensioni (kg/lbs) per ciascun produttore.
        </p>
      </div>

      <div className="w-full overflow-x-auto overscroll-contain whitespace-nowrap pb-1">
        <div className="flex gap-2">
          {brands.map((b) => {
            const isSelected = (currentBrand?.id || brands[0].id) === b.id;
            return (
              <button
                key={b.id}
                onClick={() => setActiveBrand(b.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-150 active:scale-95 shadow-xs ${
                  isSelected
                    ? 'border-primary bg-primary text-white shadow-sm shadow-primary/20 ring-1 ring-primary/30'
                    : 'border-stone-200/80 bg-card text-[#2a1810] hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                {b.name}
              </button>
            );
          })}
        </div>
      </div>

      {currentBrand && <BrandCatalog brand={currentBrand} />}
    </div>
  );
}

