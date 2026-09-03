import { Trash2, Bookmark } from 'lucide-react';
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
      <div className="space-y-4 pb-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight">Set Salvati</h2>
          <p className="text-sm text-muted-foreground">I tuoi set personalizzati.</p>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Bookmark className="mb-3 h-10 w-10 text-muted-foreground/40" />
          <p className="text-sm text-muted-foreground">Nessun set salvato.</p>
          <p className="text-xs text-muted-foreground/70">Vai nel Set Builder e salva il tuo primo set.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Set Salvati</h2>
        <p className="text-sm text-muted-foreground">{sets.length} set salvati</p>
      </div>

      <div className="max-h-[70vh] space-y-2 overflow-y-auto overscroll-contain">
          {sets.map((s) => (
            <Card key={s.id} className="border-border/60">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="bg-amber-600">{s.brandName}</Badge>
                      <code className="text-sm font-bold text-amber-300">{s.generatedCode}</code>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {s.trebleName} / {s.bassName} — {s.tensionLabel}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {new Date(s.createdAt).toLocaleString('it-IT')}
                    </p>
                  </div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0 text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Eliminare il set?</AlertDialogTitle>
                        <AlertDialogDescription>Il set "{s.generatedCode}" verrà rimosso definitivamente.</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annulla</AlertDialogCancel>
                        <AlertDialogAction
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
