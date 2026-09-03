import { useEffect, useState } from 'react';
import { Guitar, Wifi, WifiOff, Wrench, Sparkles, BookOpen, Database, Bookmark } from 'lucide-react';
import { useOnlineStatus } from '@/hooks/use-online-status';
import { SetBuilderView } from '@/views/SetBuilderView';
import { DecisionAdvisorView } from '@/views/DecisionAdvisorView';
import { CatalogExplorerView } from '@/views/CatalogExplorerView';
import { DatabaseEditorView } from '@/views/DatabaseEditorView';
import { SavedSetsView } from '@/views/SavedSetsView';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

type Tab = 'builder' | 'advisor' | 'catalog' | 'saved' | 'editor';

const TABS: { id: Tab; label: string; icon: typeof Wrench }[] = [
  { id: 'builder', label: 'Builder', icon: Wrench },
  { id: 'advisor', label: 'Consigli', icon: Sparkles },
  { id: 'catalog', label: 'Catalogo', icon: BookOpen },
  { id: 'saved', label: 'Salvati', icon: Bookmark },
  { id: 'editor', label: 'Dati', icon: Database },
];

function App() {
  const online = useOnlineStatus();
  const [tab, setTab] = useState<Tab>('builder');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 shadow-lg shadow-amber-500/20">
              <Guitar className="h-5 w-5 text-black" />
            </div>
            <div>
              <h1 className="text-base font-bold leading-none tracking-tight">StringLab</h1>
              <p className="text-[10px] text-muted-foreground">Corde chitarra classica</p>
            </div>
          </div>
          <div
            className={cn(
              'flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-colors',
              online
                ? 'bg-emerald-500/10 text-emerald-400'
                : 'bg-amber-500/10 text-amber-400'
            )}
          >
            {online ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline">{online ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-4">
        {tab === 'builder' && <SetBuilderView />}
        {tab === 'advisor' && <DecisionAdvisorView />}
        {tab === 'catalog' && <CatalogExplorerView />}
        {tab === 'saved' && <SavedSetsView />}
        {tab === 'editor' && <DatabaseEditorView />}
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-40 border-t border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-2xl items-stretch justify-around px-2 py-1.5">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'flex flex-1 flex-col items-center gap-1 rounded-lg py-2 transition-all',
                  active ? 'text-amber-400' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className={cn('h-5 w-5 transition-transform', active && 'scale-110')} />
                <span className="text-[10px] font-medium">{t.label}</span>
                {active && <div className="h-0.5 w-6 rounded-full bg-amber-500" />}
              </button>
            );
          })}
        </div>
      </nav>

      <Toaster />
    </div>
  );
}

export default App;
