import { useMemo, useState } from 'react';
import { Layers, Music2 } from 'lucide-react';
import { useStringLab } from '@/hooks/use-string-lab';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import type { Brand } from '@/domain/types';

const MATERIAL_COLORS: Record<string, string> = {
  'Nylon (cantini)': 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10',
  'Carbonio / Fluorocarbonio (cantini)': 'text-sky-300 border-sky-500/30 bg-sky-500/10',
  'Titanium Nylon (cantini)': 'text-violet-300 border-violet-500/30 bg-violet-500/10',
  'Misto (cantini)': 'text-amber-300 border-amber-500/30 bg-amber-500/10',
  'Nylon (bassi)': 'text-orange-300 border-orange-500/30 bg-orange-500/10',
  'Composito / Dynacore (bassi)': 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10',
};

function materialClass(mat: string): string {
  return MATERIAL_COLORS[mat] || 'text-muted-foreground border-border bg-muted';
}

function StringCard({
  name,
  code,
  material,
  tone,
}: {
  name: string;
  code: string;
  material: string;
  tone: string;
}) {
  return (
    <Card className="border-border/60">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <Music2 className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-semibold">{name}</span>
          </div>
          {code && <Badge variant="secondary" className="shrink-0">{code}</Badge>}
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className={`rounded-full border px-2 py-0.5 text-xs ${materialClass(material)}`}>{material}</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{tone}</p>
      </CardContent>
    </Card>
  );
}

function BrandCatalog({ brand }: { brand: Brand }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Layers className="h-5 w-5 text-amber-400" />
        <h3 className="text-lg font-bold">{brand.name}</h3>
      </div>

      <Tabs defaultValue="trebles">
        <TabsList className="w-full">
          <TabsTrigger value="trebles" className="flex-1">Cantini</TabsTrigger>
          <TabsTrigger value="basses" className="flex-1">Bassi</TabsTrigger>
          <TabsTrigger value="tensions" className="flex-1">Tensioni</TabsTrigger>
        </TabsList>

        <TabsContent value="trebles" className="space-y-2">
          {brand.trebles.map((t) => (
            <StringCard key={t.id} name={t.name} code={t.code} material={t.material} tone={t.tone} />
          ))}
        </TabsContent>

        <TabsContent value="basses" className="space-y-2">
          {brand.basses.map((b) => (
            <StringCard key={b.id} name={b.name} code={b.code} material={b.material} tone={b.tone} />
          ))}
        </TabsContent>

        <TabsContent value="tensions">
          <Card>
            <CardContent className="space-y-2 p-4">
              {brand.tensions.map((t, i) => (
                <div key={`${t.label}-${i}`} className="flex items-center justify-between rounded-md border border-border/60 px-3 py-2">
                  <span className="text-sm font-medium">{t.label}</span>
                  <Badge variant="secondary">{t.code}</Badge>
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
    return <div className="py-20 text-center text-muted-foreground">Caricamento dati...</div>;
  }

  return (
    <div className="space-y-4 pb-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight">Catalogo Materiali</h2>
        <p className="text-sm text-muted-foreground">Esplora i materiali disponibili per ogni marca.</p>
      </div>

      <div className="w-full overflow-x-auto overscroll-contain whitespace-nowrap">
        <div className="flex gap-2 pb-1">
          {brands.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBrand(b.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                (currentBrand?.id || brands[0].id) === b.id
                  ? 'border-amber-500 bg-amber-500/15 text-amber-200'
                  : 'border-border hover:border-amber-500/50'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {currentBrand && <BrandCatalog brand={currentBrand} />}
    </div>
  );
}
