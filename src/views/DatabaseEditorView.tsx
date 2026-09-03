import { useState } from 'react';
import { Plus, Trash2, Pencil, Download, Upload, X } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
import type { Brand, BassString, TrebleString, TensionOption } from '@/domain/types';

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
  const [material, setMaterial] = useState(initial.material);
  const [tone, setTone] = useState(initial.tone);

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({ name: name.trim(), code: code.trim(), material, tone: tone.trim() });
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>Inserisci i dettagli della corda.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-3">
          <div>
            <Label className="mb-1 block">Nome</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="es. Alliance" />
          </div>
          <div>
            <Label className="mb-1 block">Codice</Label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="es. A" />
          </div>
          <div>
            <Label className="mb-1 block">Materiale</Label>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm"
            >
              {materials.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>
          <div>
            <Label className="mb-1 block">Timbro</Label>
            <Input value={tone} onChange={(e) => setTone(e.target.value)} placeholder="es. Brillante, proiezione elevata" />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Annulla</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>Salva</AlertDialogAction>
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
    onSave({ label: label.trim(), code: code.trim() });
    setLabel('');
    setCode('');
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Nuova tensione</AlertDialogTitle>
          <AlertDialogDescription>Aggiungi un'opzione di tensione.</AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-3">
          <div>
            <Label className="mb-1 block">Etichetta</Label>
            <Input value={label} onChange={(e) => setLabel(e.target.value)} placeholder="es. Normal Tension" />
          </div>
          <div>
            <Label className="mb-1 block">Codice</Label>
            <Input value={code} onChange={(e) => setCode(e.target.value)} placeholder="es. 45" />
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Annulla</AlertDialogCancel>
          <AlertDialogAction onClick={handleSave}>Salva</AlertDialogAction>
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
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{brand.name}</CardTitle>
          <Badge variant="outline">{brand.strategyKey}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Trebles */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label>Cantini ({brand.trebles.length})</Label>
            <StringEditDialog
              title="Nuovo cantino"
              initial={{ name: '', code: '', material: macroMats.trebles[0] || '', tone: '' }}
              materials={macroMats.trebles}
              onSave={(data) => {
                lab.addTrebleString(brand.id, { id: genId('t'), ...data });
                toast({ title: 'Cantino aggiunto' });
              }}
              trigger={<Button size="sm" variant="outline"><Plus className="mr-1 h-3.5 w-3.5" />Aggiungi</Button>}
            />
          </div>
          <div className="space-y-1">
            {brand.trebles.map((t) => (
              <div key={t.id} className="flex items-center gap-2 rounded-md border border-border/60 px-3 py-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{t.name}</span>
                    {t.code && <Badge variant="secondary" className="text-xs">{t.code}</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{t.material}</p>
                </div>
                <StringEditDialog
                  title="Modifica cantino"
                  initial={t}
                  materials={macroMats.trebles}
                  onSave={(data) => {
                    lab.updateTrebleString(brand.id, { id: t.id, ...data });
                    toast({ title: 'Cantino aggiornato' });
                  }}
                  trigger={<Button size="icon" variant="ghost" className="h-7 w-7"><Pencil className="h-3.5 w-3.5" /></Button>}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 text-destructive"
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

        <Separator />

        {/* Basses */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label>Bassi ({brand.basses.length})</Label>
            <StringEditDialog
              title="Nuovo basso"
              initial={{ name: '', code: '', material: macroMats.basses[0] || '', tone: '' }}
              materials={macroMats.basses}
              onSave={(data) => {
                lab.addBassString(brand.id, { id: genId('b'), ...data });
                toast({ title: 'Basso aggiunto' });
              }}
              trigger={<Button size="sm" variant="outline"><Plus className="mr-1 h-3.5 w-3.5" />Aggiungi</Button>}
            />
          </div>
          <div className="space-y-1">
            {brand.basses.map((b) => (
              <div key={b.id} className="flex items-center gap-2 rounded-md border border-border/60 px-3 py-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{b.name}</span>
                    {b.code && <Badge variant="secondary" className="text-xs">{b.code}</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">{b.material}</p>
                </div>
                <StringEditDialog
                  title="Modifica basso"
                  initial={b}
                  materials={macroMats.basses}
                  onSave={(data) => {
                    lab.updateBassString(brand.id, { id: b.id, ...data });
                    toast({ title: 'Basso aggiornato' });
                  }}
                  trigger={<Button size="icon" variant="ghost" className="h-7 w-7"><Pencil className="h-3.5 w-3.5" /></Button>}
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-7 w-7 text-destructive"
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

        <Separator />

        {/* Tensions */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label>Tensioni ({brand.tensions.length})</Label>
            <TensionEditDialog
              onSave={(data) => {
                lab.addTension(brand.id, data);
                toast({ title: 'Tensione aggiunta' });
              }}
              trigger={<Button size="sm" variant="outline"><Plus className="mr-1 h-3.5 w-3.5" />Aggiungi</Button>}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {brand.tensions.map((t, i) => (
              <div key={`${t.label}-${i}`} className="flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1">
                <span className="text-xs font-medium">{t.label}</span>
                <Badge variant="secondary" className="text-xs">{t.code}</Badge>
                <button
                  onClick={() => {
                    lab.deleteTension(brand.id, i);
                    toast({ title: 'Tensione eliminata' });
                  }}
                  className="ml-1 text-destructive hover:text-destructive/80"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Delete brand */}
        <div className="flex justify-end">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-1 h-3.5 w-3.5" />
                Elimina marca
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Eliminare {brand.name}?</AlertDialogTitle>
                <AlertDialogDescription>Questa azione non può essere annullata. Tutti i dati della marca verranno persi.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annulla</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    lab.deleteBrand(brand.id);
                    toast({ title: 'Marca eliminata' });
                  }}
                >
                  Elimina
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
        <Button size="sm" variant="outline"><Plus className="mr-1 h-3.5 w-3.5" />Nuova marca</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Nuova marca</AlertDialogTitle>
          <AlertDialogDescription>Crea una marca personalizzata. Usa la strategia generica per i codici.</AlertDialogDescription>
        </AlertDialogHeader>
        <div>
          <Label className="mb-1 block">Nome marca</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="es. Hannabach" />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Annulla</AlertDialogCancel>
          <AlertDialogAction onClick={handleCreate}>Crea</AlertDialogAction>
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
    toast({ title: 'Backup esportato', description: 'File JSON scaricato.' });
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      try {
        const json = ev.target?.result as string;
        await lab.importJSON(json);
        toast({ title: 'Backup importato', description: 'Dati ripristinati correttamente.' });
        setTick((t) => t + 1);
      } catch {
        toast({ title: 'Importazione fallita', description: 'File JSON non valido.', variant: 'destructive' });
      }
    };
    reader.readAsText(file);
  };

  const handleExportCSV = () => {
    const sets = lab.savedSets || [];
    if (!sets.length) {
      toast({ title: 'Nessun set salvato', description: 'Salva almeno un set prima di esportare.' });
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
    toast({ title: 'CSV esportato' });
  };

  return (
    <div className="space-y-4 pb-4" key={tick}>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Gestione Dati</h2>
          <p className="text-sm text-muted-foreground">Modifica marche, corde e tensioni. Backup completo.</p>
        </div>
      </div>

      {/* Import / Export */}
      <Card>
        <CardContent className="flex flex-wrap gap-2 p-4">
          <Button onClick={handleExport} variant="outline" size="sm">
            <Download className="mr-1.5 h-4 w-4" />Esporta JSON
          </Button>
          <Button onClick={handleExportCSV} variant="outline" size="sm">
            <Download className="mr-1.5 h-4 w-4" />Esporta CSV
          </Button>
          <label>
            <input type="file" accept="application/json" onChange={handleImport} className="hidden" />
            <Button variant="outline" size="sm" asChild>
              <span><Upload className="mr-1.5 h-4 w-4" />Importa JSON</span>
            </Button>
          </label>
          <NewBrandDialog onCreated={() => setTick((t) => t + 1)} />
        </CardContent>
      </Card>

      {/* Brand editors */}
      <div className="max-h-[60vh] space-y-3 overflow-y-auto overscroll-contain">
          {brands.map((b) => (
            <BrandEditor key={b.id} brand={b} />
          ))}
      </div>
    </div>
  );
}
