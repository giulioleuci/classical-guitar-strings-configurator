import { Trash2, Bookmark, Scale } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

export function SavedSetsView() {
  const lab = useStringLab();
  const { toast } = useToast();
  const sets = lab.savedSets || [];

  if (!sets.length) {
    return (
      <div className="space-y-6 pb-6">
        <div className="space-y-1">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#2a1810]">Set Salvati</h2>
          <p className="font-serif text-sm italic text-muted-foreground">La tua collezione di configurazioni preferite.</p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-card/60 py-16 px-4 text-center shadow-xs backdrop-blur-xs">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-3 shadow-xs">
            <Bookmark className="h-6 w-6" />
          </div>
          <p className="font-serif text-base font-semibold text-[#2a1810]">Nessun set salvato</p>
          <p className="mt-1 text-xs text-muted-foreground text-balance max-w-sm">
            Vai nel Set Builder, componi la tua combinazione ideale e premi "Salva configurazione".
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-6">
      <div className="space-y-1">
        <h2 className="font-display text-2xl font-bold tracking-tight text-[#2a1810]">Set Salvati</h2>
        <p className="font-serif text-sm italic text-muted-foreground">{sets.length} configurazioni archiviate</p>
      </div>

      <div className="max-h-[70vh] space-y-3 overflow-y-auto overscroll-contain pr-0.5">
        {sets.map((s) => (
          <Card key={s.id} className="border-stone-200/80 bg-card/95 shadow-xs transition-all duration-150 hover:border-primary/40 backdrop-blur-xs">
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className="bg-primary text-white font-semibold shadow-2xs">{s.brandName}</Badge>
                    <code className="font-display text-base font-bold text-primary">{s.generatedCode}</code>
                    {s.totalTensionKg !== undefined && s.totalTensionKg > 0 && (
                      <Badge variant="outline" className="border-primary/30 font-mono text-[11px] text-muted-foreground tabular-nums">
                        <Scale className="mr-1 h-3 w-3 text-primary" />
                        {s.totalTensionKg} kg ({s.totalTensionLbs} lbs)
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs font-medium text-[#2a1810]">
                    {s.trebleName} / {s.bassName} — <span className="text-primary font-semibold">{s.tensionLabel}</span>
                  </p>
                  <p className="text-[11px] font-serif italic text-muted-foreground tabular-nums">
                    Salvato il {new Date(s.createdAt).toLocaleString('it-IT', { dateStyle: 'medium', timeStyle: 'short' })}
                  </p>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0 text-destructive/80 hover:text-destructive hover:bg-destructive/10 transition-all duration-150 active:scale-90">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-card border-stone-200/80">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-display tracking-tight text-[#2a1810]">Eliminare il set?</AlertDialogTitle>
                      <AlertDialogDescription className="font-serif italic text-muted-foreground">
                        Il set "{s.generatedCode}" ({s.brandName}) verrà rimosso dall'archivio locale.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="border-stone-300">Annulla</AlertDialogCancel>
                      <AlertDialogAction
                        className="bg-destructive hover:bg-destructive/90 text-white font-semibold"
                        onClick={() => {
                          if (s.id !== undefined) {
                            lab.deleteSet(s.id);
                            toast({ title: 'Set eliminato' });
                          }
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
        ))}
      </div>
    </div>
  );
}

