import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Table2, RotateCcw, CheckCircle2 } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import type { DecisionRule } from '@/domain/types';

export function DecisionAdvisorView() {
  const lab = useStringLab();
  const macroMaterials = lab.macroMaterials;
  const standardTensions = lab.standardTensions || [];
  const brands = lab.brands || [];

  const [step, setStep] = useState(0);
  const [trebleMat, setTrebleMat] = useState<string>('');
  const [bassMat, setBassMat] = useState<string>('');
  const [tension, setTension] = useState<string>('');
  const [results, setResults] = useState<DecisionRule[]>([]);

  useEffect(() => {
    if (step === 3 && trebleMat && bassMat && tension) {
      lab.getRecommendations({ trebleMat, bassMat, tension }).then(setResults);
    }
  }, [step, trebleMat, bassMat, tension, lab]);

  const reset = () => {
    setStep(0);
    setTrebleMat('');
    setBassMat('');
    setTension('');
    setResults([]);
  };

  if (!macroMaterials) {
    return <div className="py-20 text-center font-serif italic text-muted-foreground">Caricamento consigliere...</div>;
  }

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-1">
        <h2 className="font-display text-2xl font-bold tracking-tight text-[#2a1810]">
          Decision Advisor
        </h2>
        <p className="font-serif text-sm italic text-muted-foreground text-balance">
          Trova il set ideale e confronta le soluzioni dei vari produttori in base ai tuoi obiettivi timbrici.
        </p>
      </div>

      {/* Progress steps */}
      <div className="flex items-center gap-2">
        {['Timbro', 'Materiali', 'Tensione', 'Risultati'].map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-1.5">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 shadow-xs ${
                i <= step
                  ? 'bg-primary text-white ring-2 ring-primary/20 shadow-primary/20'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {i < step ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
            </div>
            <span className={`hidden text-xs font-medium sm:inline ${i <= step ? 'text-[#2a1810] font-semibold' : 'text-muted-foreground'}`}>
              {label}
            </span>
            {i < 3 && (
              <div className={`h-0.5 flex-1 rounded-full transition-colors ${i < step ? 'bg-primary' : 'bg-stone-200/80'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Tone goal */}
      {step === 0 && (
        <Card className="border-stone-200/80 bg-card/95 shadow-xs backdrop-blur-xs">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 font-display text-lg tracking-tight text-[#2a1810]">
              <Sparkles className="h-5 w-5 text-primary" />
              Quale timbro sonoro desideri ottenere?
            </CardTitle>
            <CardDescription className="font-serif italic text-muted-foreground">
              Seleziona un profilo timbrico guidato o procedi con la selezione manuale
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {(lab.decisionMatrix || []).map((rule) => (
              <button
                key={rule.id}
                onClick={() => {
                  setTrebleMat(rule.trebleMat);
                  setBassMat(rule.bassMat);
                  setTension(rule.tension);
                  setStep(3);
                }}
                className="group flex w-full items-center justify-between rounded-xl border border-stone-200/70 bg-background/80 p-3.5 text-left transition-all duration-150 hover:border-primary hover:bg-amber-100/30 active:scale-[0.99] shadow-xs"
              >
                <div className="space-y-1">
                  <span className="text-sm font-semibold text-[#2a1810] group-hover:text-primary transition-colors">
                    {rule.toneGoal}
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-[11px] text-muted-foreground">
                    <span>{rule.trebleMat}</span>
                    <span>•</span>
                    <span>{rule.bassMat}</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-150" />
              </button>
            ))}
            <Separator className="my-3 bg-stone-200/60" />
            <Button
              onClick={() => setStep(1)}
              variant="outline"
              className="w-full border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-[0.98]"
            >
              Configurazione manuale passo-passo
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 1: Materials */}
      {step === 1 && (
        <Card className="border-stone-200/80 bg-card/95 shadow-xs backdrop-blur-xs">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg tracking-tight text-[#2a1810]">Selezione Materiali</CardTitle>
            <CardDescription className="font-serif italic text-muted-foreground">
              Seleziona il materiale per i cantini e per i bassi
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Materiale Cantini (1ª, 2ª, 3ª)
              </Label>
              <div className="flex flex-wrap gap-2">
                {macroMaterials.trebles.map((m) => (
                  <button
                    key={m}
                    onClick={() => setTrebleMat(m)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 active:scale-95 shadow-xs ${
                      trebleMat === m
                        ? 'border-primary bg-primary text-white shadow-sm shadow-primary/20 ring-1 ring-primary/30'
                        : 'border-stone-200/80 bg-background text-[#2a1810] hover:border-primary/40 hover:bg-primary/5'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Materiale Bassi (4ª, 5ª, 6ª)
              </Label>
              <div className="flex flex-wrap gap-2">
                {macroMaterials.basses.map((m) => (
                  <button
                    key={m}
                    onClick={() => setBassMat(m)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-150 active:scale-95 shadow-xs ${
                      bassMat === m
                        ? 'border-primary bg-primary text-white shadow-sm shadow-primary/20 ring-1 ring-primary/30'
                        : 'border-stone-200/80 bg-background text-[#2a1810] hover:border-primary/40 hover:bg-primary/5'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={!trebleMat || !bassMat}
              className="w-full bg-primary hover:bg-[#b0451e] text-white font-semibold shadow-sm transition-all duration-150 active:scale-[0.98]"
            >
              Continua alla Tensione
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Tension */}
      {step === 2 && (
        <Card className="border-stone-200/80 bg-card/95 shadow-xs backdrop-blur-xs">
          <CardHeader className="pb-3">
            <CardTitle className="font-display text-lg tracking-tight text-[#2a1810]">Tensione Desiderata</CardTitle>
            <CardDescription className="font-serif italic text-muted-foreground">
              Scegli la resistenza al tocco e la pressione sui tasti
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {standardTensions.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTension(t);
                  setStep(3);
                }}
                className={`flex w-full items-center justify-between rounded-xl border p-3.5 text-left transition-all duration-150 active:scale-[0.99] ${
                  tension === t
                    ? 'border-primary bg-amber-100/50 ring-1 ring-primary/60 text-[#2a1810] shadow-xs'
                    : 'border-stone-200/80 bg-background hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                <span className="text-sm font-semibold">{t}</span>
                {tension === t && (
                  <Badge className="bg-primary text-white">Selezionato</Badge>
                )}
              </button>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Results */}
      {step === 3 && (
        <div className="space-y-4">
          <Card className="overflow-hidden border-primary/30 bg-gradient-to-b from-card to-amber-50/40 shadow-md shadow-stone-900/5 ring-1 ring-stone-900/5">
            <CardHeader className="border-b border-stone-200/60 bg-primary/5 pb-4">
              <CardTitle className="flex items-center gap-2 font-display text-lg tracking-tight text-[#2a1810]">
                <Table2 className="h-5 w-5 text-primary" />
                Tabella Comparativa dei Produttori
              </CardTitle>
              <CardDescription className="font-serif italic text-muted-foreground">
                {results.length > 0
                  ? results[0].toneGoal
                  : 'Configurazione personalizzata: visualizzazione raccomandazioni compatibili'}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 p-5">
              <div className="flex flex-wrap gap-2 text-xs">
                {trebleMat && (
                  <Badge variant="outline" className="border-primary/30 bg-background/90 text-[#2a1810] shadow-xs">
                    Cantini: {trebleMat}
                  </Badge>
                )}
                {bassMat && (
                  <Badge variant="outline" className="border-primary/30 bg-background/90 text-[#2a1810] shadow-xs">
                    Bassi: {bassMat}
                  </Badge>
                )}
                {tension && (
                  <Badge variant="outline" className="border-primary/30 bg-background/90 text-[#2a1810] shadow-xs">
                    Tensione: {tension}
                  </Badge>
                )}
              </div>

              <div className="overflow-x-auto rounded-xl border border-stone-200/80 bg-background shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-stone-200/70 bg-muted/40 text-[11px] font-semibold text-muted-foreground">
                      <th className="py-3 px-3.5">Produttore</th>
                      <th className="py-3 px-3.5">Set Raccomandato</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200/50">
                    {brands.map((b) => {
                      const rec = results[0]?.recommendations?.[b.id] || 'Set personalizzato con Set Builder';
                      return (
                        <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                          <td className="py-3 px-3.5 font-bold text-[#2a1810]">{b.name}</td>
                          <td className="py-3 px-3.5 font-semibold text-primary">{rec}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <Button
                onClick={reset}
                variant="outline"
                className="w-full border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-[0.98]"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Nuova consultazione
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

