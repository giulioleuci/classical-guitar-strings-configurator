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
      navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {});
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-amber-800/20">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none"
      >
        Vai al contenuto principale
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-background/85 backdrop-blur-md transition-all">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-[#b84a20] to-[#802f10] text-white shadow-md shadow-primary/20 ring-1 ring-white/20">
              <Guitar className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold tracking-wider text-[#2a1810]">
                STRINGLAB
              </h1>
              <p className="font-serif text-xs italic text-muted-foreground">
                Configuratore Liutario per Chitarra Classica
              </p>
            </div>
          </div>
          <div
            className={cn(
              'flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-all shadow-xs',
              online
                ? 'border-emerald-600/20 bg-emerald-500/10 text-emerald-800'
                : 'border-primary/30 bg-primary/10 text-primary'
            )}
          >
            <span
              className={cn(
                'h-2 w-2 rounded-full',
                online ? 'bg-emerald-500 animate-pulse' : 'bg-primary'
              )}
            />
            {online ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />}
            <span className="hidden sm:inline font-sans font-medium">{online ? 'Offline Ready' : 'Offline'}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:px-6">
        {tab === 'builder' && <SetBuilderView />}
        {tab === 'advisor' && <DecisionAdvisorView />}
        {tab === 'catalog' && <CatalogExplorerView />}
        {tab === 'saved' && <SavedSetsView />}
        {tab === 'editor' && <DatabaseEditorView />}
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 z-40 border-t border-stone-200/80 bg-card/90 backdrop-blur-xl shadow-lg shadow-stone-900/5">
        <div className="mx-auto flex max-w-3xl items-stretch justify-around px-2 py-1.5">
          {TABS.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={cn(
                  'relative flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 transition-all active:scale-95 duration-200',
                  active
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className={cn('h-5 w-5 transition-transform duration-200', active && 'scale-110 stroke-[2.25]')} />
                <span className="text-[11px] tracking-tight">{t.label}</span>
                {active && (
                  <span className="absolute -bottom-1 h-0.5 w-7 rounded-full bg-primary" />
                )}
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
