import { useState } from 'react';
import { Plus, Trash2, Pencil, Download, Upload, X } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import type { Brand, TensionOption } from '@/domain/types';

function genId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}

function StringEditDialog({
  title,
  initial,
  materials,
  onSave,
  trigger,
}: {
  title: string;
  initial: { name: string; code: string; material: string; tone: string };
  materials: string[];
  onSave: (data: { name: string; code: string; material: string; tone: string }) => void;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(initial.name);
  const [code, setCode] = useState(initial.code);
  const [material, setMaterial] = useState(initial.material || materials[0] || '');
  const [tone, setTone] = useState(initial.tone);

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({ name: name.trim(), code: code.trim(), material, tone: tone.trim() });
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-card border-stone-200/80 shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display text-lg tracking-tight text-[#2a1810]">{title}</AlertDialogTitle>
          <AlertDialogDescription className="font-serif italic text-muted-foreground">
            Inserisci o modifica i dettagli del modello di corda.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-3 py-2">
          <div>
            <Label className="mb-1 block text-xs font-semibold">Nome modello</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="es. Alliance / Cantiga" />
          </div>
          <div>
            <Label className="mb-1 block text-xs font-semibold">Codice identificativo</Label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="es. A / 510" />
          </div>
          <div>
            <Label className="mb-1 block text-xs font-semibold">Materiale standardizzato</Label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm shadow-2xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
            >
              {materials.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="mb-1 block text-xs font-semibold">Descrizione timbrica</Label>
            <Input value={tone} onChange={(e) => setTone(e.target.value)} placeholder="es. Brillante, grande sustain" />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-stone-300">Annulla</AlertDialogCancel>
          <AlertDialogAction className="bg-primary hover:bg-[#b0451e] text-white font-semibold" onClick={handleSave}>Salva</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function TensionEditDialog({
  onSave,
  trigger,
}: {
  onSave: (data: TensionOption) => void;
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState('');
  const [code, setCode] = useState('');

  const handleSave = () => {
    if (!label.trim()) return;
    onSave({ label: label.trim(), code: code.trim(), standardLevel: 'Normal' });
    setLabel('');
    setCode('');
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent className="bg-card border-stone-200/80 shadow-lg">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display text-lg tracking-tight text-[#2a1810]">Nuova Tensione</AlertDialogTitle>
          <AlertDialogDescription className="font-serif italic text-muted-foreground">
            Aggiungi un'opzione di tensione per questa marca.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-3 py-2">
          <div>
            <Label className="mb-1 block text-xs font-semibold">Etichetta</Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="es. Alta (High Tension - 46)" />
          </div>
          <div>
            <Label className="mb-1 block text-xs font-semibold">Codice</Label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="es. 46 / J / High" />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-stone-300">Annulla</AlertDialogCancel>
          <AlertDialogAction className="bg-primary hover:bg-[#b0451e] text-white font-semibold" onClick={handleSave}>Salva</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function BrandEditor({ brand }: { brand: Brand }) {
  const lab = useStringLab();
  const { toast } = useToast();
  const macroMats = lab.macroMaterials || { basses: [], trebles: [] };

  return (
    <Card className="border-stone-200/80 bg-card/95 shadow-xs backdrop-blur-xs">
      <CardHeader className="border-b border-stone-200/60 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="font-display text-lg font-bold tracking-tight text-[#2a1810]">{brand.name}</CardTitle>
          <Badge variant="outline" className="border-primary/30 font-mono text-xs text-primary">{brand.strategyKey}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-5 p-4">
        {/* Trebles */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Cantini ({brand.trebles.length})
            </Label>
            <StringEditDialog
              title="Nuovo Cantino"
              initial={{ name: '', code: '', material: macroMats.trebles[0] || '', tone: '' }}
              materials={macroMats.trebles}
              onSave={(data) => {
                lab.addTrebleString(brand.id, { id: genId('t'), ...data });
                toast({ title: 'Cantino aggiunto' });
              }}
              trigger={<Button size="sm" variant="outline" className="h-7 text-xs border-stone-300 hover:bg-primary/10 hover:text-primary"><Plus className="mr-1 h-3 w-3" />Aggiungi</Button>}
            />
          </div>
          <div className="space-y-1.5">
            {brand.trebles.map((t) => (
              <div key={t.id} className="flex items-center gap-2 rounded-xl border border-stone-200/60 bg-background/80 px-3 py-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#2a1810]">{t.name}</span>
                    {t.code && <Badge variant="outline" className="text-[10px] border-primary/30 text-primary font-mono tabular-nums">{t.code}</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{t.material}</p>
                </div>
                <StringEditDialog
                  title="Modifica cantino"
                  initial={t}
                  materials={macroMats.trebles}
                  onSave={(data) => {
                    lab.updateTrebleString(brand.id, { id: t.id, ...data, specs: t.specs });
                    toast({ title: 'Cantino aggiornato' });
                  }}
                  trigger={<Button size="icon" variant="ghost" className="h-7 w-7"><Pencil className="h-3.5 w-3.5" /></Button>}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 text-destructive hover:bg-destructive/10"
                  onClick={() => {
                    lab.deleteTrebleString(brand.id, t.id);
                    toast({ title: 'Cantino eliminato' });
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-stone-200/60" />

        {/* Basses */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Bassi ({brand.basses.length})
            </Label>
            <StringEditDialog
              title="Nuovo Basso"
              initial={{ name: '', code: '', material: macroMats.basses[0] || '', tone: '' }}
              materials={macroMats.basses}
              onSave={(data) => {
                lab.addBassString(brand.id, { id: genId('b'), ...data });
                toast({ title: 'Basso aggiunto' });
              }}
              trigger={<Button size="sm" variant="outline" className="h-7 text-xs border-stone-300 hover:bg-primary/10 hover:text-primary"><Plus className="mr-1 h-3 w-3" />Aggiungi</Button>}
            />
          </div>
          <div className="space-y-1.5">
            {brand.basses.map((b) => (
              <div key={b.id} className="flex items-center gap-2 rounded-xl border border-stone-200/60 bg-background/80 px-3 py-2 shadow-2xs">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#2a1810]">{b.name}</span>
                    {b.code && <Badge variant="outline" className="text-[10px] border-primary/30 text-primary font-mono tabular-nums">{b.code}</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{b.material}</p>
                </div>
                <StringEditDialog
                  title="Modifica basso"
                  initial={b}
                  materials={macroMats.basses}
                  onSave={(data) => {
                    lab.updateBassString(brand.id, { id: b.id, ...data, specs: b.specs });
                    toast({ title: 'Basso aggiornato' });
                  }}
                  trigger={<Button size="icon" variant="ghost" className="h-7 w-7"><Pencil className="h-3.5 w-3.5" /></Button>}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 text-destructive hover:bg-destructive/10"
                  onClick={() => {
                    lab.deleteBassString(brand.id, b.id);
                    toast({ title: 'Basso eliminato' });
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-stone-200/60" />

        {/* Tensions */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Tensioni ({brand.tensions.length})
            </Label>
            <TensionEditDialog
              onSave={(data) => {
                lab.addTension(brand.id, data);
                toast({ title: 'Tensione aggiunta' });
              }}
              trigger={<Button size="sm" variant="outline" className="h-7 text-xs border-stone-300 hover:bg-primary/10 hover:text-primary"><Plus className="mr-1 h-3 w-3" />Aggiungi</Button>}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {brand.tensions.map((t, i) => (
              <div key={`${t.label}-${i}`} className="flex items-center gap-1.5 rounded-full border border-stone-200/80 bg-background px-3 py-1 text-xs shadow-2xs">
                <span className="font-semibold text-[#2a1810]">{t.label}</span>
                <Badge variant="outline" className="border-primary/30 font-mono text-[10px] text-primary tabular-nums">{t.code}</Badge>
                <button
                  onClick={() => {
                    lab.deleteTension(brand.id, i);
                    toast({ title: 'Tensione eliminata' });
                  }}
                  className="ml-1 text-destructive/80 hover:text-destructive transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-stone-200/60" />

        {/* Delete brand */}
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm" className="h-8 text-xs font-semibold shadow-xs">
                <Trash2 className="mr-1 h-3.5 w-3.5" />
                Elimina marca
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-card border-stone-200/80">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-display text-lg tracking-tight text-[#2a1810]">Eliminare {brand.name}?</AlertDialogTitle>
                <AlertDialogDescription className="font-serif italic text-muted-foreground">
                  Questa azione è definitiva. Tutti i modelli di cantini, bassi e tensioni associati verranno cancellati dal database locale.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-stone-300">Annulla</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-destructive hover:bg-destructive/90 text-white font-semibold"
                  onClick={() => {
                    lab.deleteBrand(brand.id);
                    toast({ title: 'Marca eliminata' });
                  }}
                >
                  Elimina definitivamente
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>
    </Card>
  );
}

function NewBrandDialog({ onCreated }: { onCreated: () => void }) {
  const lab = useStringLab();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const handleCreate = () => {
    if (!name.trim()) return;
    const id = genId('brand');
    lab.addBrand({
      id,
      name: name.trim(),
      strategyKey: 'GENERIC',
      basses: [],
      trebles: [],
      tensions: [],
    });
    toast({ title: 'Marca creata', description: name.trim() });
    setName('');
    setOpen(false);
    onCreated();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="outline" className="border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-95">
          <Plus className="mr-1.5 h-4 w-4" />Nuova marca
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card border-stone-200/80">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-display text-lg tracking-tight text-[#2a1810]">Nuovo Produttore</AlertDialogTitle>
          <AlertDialogDescription className="font-serif italic text-muted-foreground">
            Aggiungi una nuova marca di corde al catalogo personale.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-2">
          <Label className="mb-1 block text-xs font-semibold">Nome del produttore</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="es. Hannabach / Knobloch / Aquila" />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-stone-300">Annulla</AlertDialogCancel>
          <AlertDialogAction className="bg-primary hover:bg-[#b0451e] text-white font-semibold" onClick={handleCreate}>Crea</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function DatabaseEditorView() {
  const lab = useStringLab();
  const { toast } = useToast();
  const brands = lab.brands || [];
  const [tick, setTick] = useState(0);

  const handleExport = async () => {
    const json = await lab.exportJSON();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stringlab-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: 'Backup JSON esportato con successo' });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const json = ev.target?.result as string;
        await lab.importJSON(json);
        toast({ title: 'Dati ripristinati correttamente' });
        setTick((t) => t + 1);
      } catch {
        toast({ title: 'Importazione non riuscita', description: 'Il file selezionato non è un JSON valido.', variant: 'destructive' });
      }
    };
    reader.readAsText(file);
  };

  const handleExportCSV = () => {
    const sets = lab.savedSets || [];
    if (!sets.length) {
      toast({ title: 'Nessun set salvato', description: 'Salva almeno un set prima di esportare in CSV.' });
      return;
    }
    const csv = lab.exportCSV(sets);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stringlab-sets-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast({ title: 'CSV esportato con successo' });
  };

  return (
    <div className="space-y-6 pb-6" key={tick}>
      <div className="space-y-1">
        <h2 className="font-display text-2xl font-bold tracking-tight text-[#2a1810]">Gestione Database</h2>
        <p className="font-serif text-sm italic text-muted-foreground text-balance">
          Personalizza catalogo, materiali, tensioni ed effettua backup completi.
        </p>
      </div>

      {/* Import / Export Card */}
      <Card className="border-stone-200/80 bg-card/95 shadow-xs backdrop-blur-xs">
        <CardContent className="flex flex-wrap gap-2.5 p-4">
          <Button onClick={handleExport} variant="outline" size="sm" className="border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-95">
            <Download className="mr-1.5 h-4 w-4" />Esporta JSON
          </Button>
          <Button onClick={handleExportCSV} variant="outline" size="sm" className="border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-95">
            <Download className="mr-1.5 h-4 w-4" />Esporta CSV
          </Button>
          <label>
            <input type="file" accept="application/json" onChange={handleImport} className="hidden" />
            <Button variant="outline" size="sm" asChild className="cursor-pointer border-stone-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-150 active:scale-95">
              <span><Upload className="mr-1.5 h-4 w-4" />Importa JSON</span>
            </Button>
          </label>
          <NewBrandDialog onCreated={() => setTick((t) => t + 1)} />
        </CardContent>
      </Card>

      {/* Brand editors */}
      <div className="max-h-[60vh] space-y-4 overflow-y-auto overscroll-contain pr-0.5">
        {brands.map((b) => (
          <BrandEditor key={b.id} brand={b} />
        ))}
      </div>
    </div>
  );
}

