import { useMemo, useState } from 'react';
import { Copy, Save, Check, Music2 } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import type { Brand, BassString, TrebleString, TensionOption } from '@/domain/types';

export function SetBuilderView() {
  const lab = useStringLab();
  const { toast } = useToast();
  const brands = lab.brands || [];

  const [brandId, setBrandId] = useState<string>('');
  const [trebleId, setTrebleId] = useState<string>('');
  const [bassId, setBassId] = useState<string>('');
  const [tensionIdx, setTensionIdx] = useState<number>(0);
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
      <div className="flex items-center justify-center py-20 text-muted-foreground">
        Caricamento dati...
      </div>
    );
  }

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({ title: 'Codice copiato', description: result.code });
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
      createdAt: Date.now(),
    });
    toast({ title: 'Set salvato', description: 'Trovi il set nella sezione Salvati.' });
  };

  return (
    <div className="space-y-4 pb-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Set Builder</h2>
        <p className="text-sm text-muted-foreground">Componi il tuo set e genera il codice in tempo reale.</p>
      </div>

      {/* Brand selector */}
      <div>
        <Label className="mb-2 block">Marca</Label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                setBrandId(b.id);
                setTrebleId('');
                setBassId('');
                setTensionIdx(0);
              }}
              className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                (brand?.id || brands[0].id) === b.id
                  ? 'border-amber-500 bg-amber-500/10 text-amber-200'
                  : 'border-border bg-card text-foreground hover:border-amber-500/50'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {brand && (
        <>
          {/* Treble selector */}
          <div>
            <Label className="mb-2 block">Cantini (Treble)</Label>
            <div className="max-h-56 overflow-y-auto overscroll-contain rounded-lg border p-1">
              <div className="space-y-1">
                {brand.trebles.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTrebleId(t.id)}
                    className={`flex w-full items-start gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                      (treble?.id || brand.trebles[0]?.id) === t.id
                        ? 'bg-amber-500/10 ring-1 ring-amber-500/40'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <Music2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">{t.name}</span>
                        {t.code && <Badge variant="secondary" className="shrink-0">{t.code}</Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground">{t.material}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground/80">{t.tone}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bass selector */}
          <div>
            <Label className="mb-2 block">Bassi (Bass)</Label>
            <div className="max-h-56 overflow-y-auto overscroll-contain rounded-lg border p-1">
              <div className="space-y-1">
                {brand.basses.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBassId(b.id)}
                    className={`flex w-full items-start gap-3 rounded-md px-3 py-2.5 text-left transition-colors ${
                      (bass?.id || brand.basses[0]?.id) === b.id
                        ? 'bg-amber-500/10 ring-1 ring-amber-500/40'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <Music2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">{b.name}</span>
                        {b.code && <Badge variant="secondary" className="shrink-0">{b.code}</Badge>}
                      </div>
                      <p className="text-xs text-muted-foreground">{b.material}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground/80">{b.tone}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tension selector */}
          <div>
            <Label className="mb-2 block">Tensione</Label>
            <div className="flex flex-wrap gap-2">
              {brand.tensions.map((t, i) => (
                <button
                  key={`${t.label}-${i}`}
                  onClick={() => setTensionIdx(i)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    (tensionIdx || 0) === i
                      ? 'border-amber-500 bg-amber-500/15 text-amber-200'
                      : 'border-border hover:border-amber-500/50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          {result && (
            <Card className="border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-amber-400">Codice Set</span>
                </CardTitle>
                <CardDescription>Anteprima live del codice generato</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-background/60 p-4 text-center">
                  <code className="text-2xl font-bold tracking-wide text-amber-300">{result.code}</code>
                </div>
                <Separator />
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Spiegazione tecnica</p>
                  <p className="text-sm leading-relaxed text-foreground/90">{result.explanation}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleCopy} className="flex-1 bg-amber-600 hover:bg-amber-500">
                    {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                    {copied ? 'Copiato' : 'Copia codice'}
                  </Button>
                  <Button onClick={handleSave} variant="outline" className="flex-1">
                    <Save className="mr-2 h-4 w-4" />
                    Salva set
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
