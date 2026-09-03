import { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Table2 } from 'lucide-react';
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
    return <div className="py-20 text-center text-muted-foreground">Caricamento dati...</div>;
  }

  return (
    <div className="space-y-4 pb-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Decision Advisor</h2>
        <p className="text-sm text-muted-foreground">Ricevi consigli personalizzati in base al suono che cerchi.</p>
      </div>

      {/* Progress steps */}
      <div className="flex items-center gap-2">
        {['Timbro', 'Materiali', 'Tensione', 'Risultati'].map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-1">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                i <= step ? 'bg-amber-500 text-black' : 'bg-muted text-muted-foreground'
              }`}
            >
              {i + 1}
            </div>
            <span className={`hidden text-xs sm:inline ${i <= step ? 'text-foreground' : 'text-muted-foreground'}`}>
              {label}
            </span>
            {i < 3 && <div className={`h-px flex-1 ${i < step ? 'bg-amber-500/50' : 'bg-border'}`} />}
          </div>
        ))}
      </div>

      {/* Step 0: Tone goal */}
      {step === 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-amber-400" />
              Che timbro desideri?
            </CardTitle>
            <CardDescription>Scegli il tipo di suono che vuoi ottenere</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {(lab.decisionMatrix || []).map((rule) => (
              <button
                key={rule.id}
                onClick={() => {
                  setTrebleMat(rule.trebleMat);
                  setBassMat(rule.bassMat);
                  setTension(rule.tension);
                  setStep(3);
                }}
                className="flex w-full items-center justify-between rounded-lg border border-border p-3 text-left transition-colors hover:border-amber-500/50 hover:bg-amber-500/5"
              >
                <span className="text-sm font-medium">{rule.toneGoal}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </button>
            ))}
            <Separator className="my-2" />
            <Button onClick={() => setStep(1)} variant="outline" className="w-full">
              Configurazione manuale
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 1: Materials */}
      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Materiali delle corde</CardTitle>
            <CardDescription>Seleziona i materiali per cantini e bassi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="mb-2 block">Materiale cantini</Label>
              <div className="flex flex-wrap gap-2">
                {macroMaterials.trebles.map((m) => (
                  <button
                    key={m}
                    onClick={() => setTrebleMat(m)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                      trebleMat === m ? 'border-amber-500 bg-amber-500/15 text-amber-200' : 'border-border hover:border-amber-500/50'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label className="mb-2 block">Materiale bassi</Label>
              <div className="flex flex-wrap gap-2">
                {macroMaterials.basses.map((m) => (
                  <button
                    key={m}
                    onClick={() => setBassMat(m)}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-all ${
                      bassMat === m ? 'border-amber-500 bg-amber-500/15 text-amber-200' : 'border-border hover:border-amber-500/50'
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
              className="w-full bg-amber-600 hover:bg-amber-500"
            >
              Continua
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Tension */}
      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tensione desiderata</CardTitle>
            <CardDescription>Scegli il livello di tensione</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {standardTensions.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTension(t);
                  setStep(3);
                }}
                className={`flex w-full items-center justify-between rounded-lg border p-3 text-left transition-colors ${
                  tension === t ? 'border-amber-500 bg-amber-500/10' : 'border-border hover:border-amber-500/50'
                }`}
              >
                <span className="text-sm font-medium">{t}</span>
                {tension === t && <Badge variant="default" className="bg-amber-600">Selezionato</Badge>}
              </button>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Step 3: Results */}
      {step === 3 && (
        <div className="space-y-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Table2 className="h-5 w-5 text-amber-400" />
                Tabella comparativa
              </CardTitle>
              <CardDescription>
                {results.length > 0
                  ? results[0].toneGoal
                  : 'Nessuna corrispondenza esatta — mostra tutte le combinazioni'}
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="flex flex-wrap gap-2 text-xs">
            {trebleMat && <Badge variant="secondary">{trebleMat}</Badge>}
            {bassMat && <Badge variant="secondary">{bassMat}</Badge>}
            {tension && <Badge variant="secondary">{tension}</Badge>}
          </div>

          <div className="overflow-x-auto overscroll-contain rounded-lg border">
            <div className="min-w-[400px]">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-background">
                  <tr className="border-b">
                    <th className="p-3 text-left font-semibold">Marca</th>
                    <th className="p-3 text-left font-semibold">Set consigliato</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((b) => {
                    const rec = results[0]?.recommendations?.[b.id] || '—';
                    return (
                      <tr key={b.id} className="border-b last:border-0">
                        <td className="p-3 font-medium">{b.name}</td>
                        <td className="p-3 text-amber-300">{rec}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <Button onClick={reset} variant="outline" className="w-full">
            Nuova consultazione
          </Button>
        </div>
      )}
    </div>
  );
}
