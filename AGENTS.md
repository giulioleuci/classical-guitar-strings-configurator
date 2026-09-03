# StringLab - Classical Guitar Strings Configurator

## Project Overview

Offline-first PWA for configuring classical guitar string sets. React + TypeScript + Vite + Dexie (IndexedDB).

## Architecture

```
src/
├── domain/          # Types and repository contracts
│   ├── types.ts     # Brand, BassString, TrebleString, TensionOption, etc.
│   └── contracts.ts # IStringRepository, INamingStrategy interfaces
├── infrastructure/  # Dexie DB, seed data, naming strategies
│   ├── database.ts  # Dexie schema (GuitarStringsDB)
│   ├── dexie-repository.ts # IStringRepository implementation
│   ├── naming-strategies.ts # Brand-specific code generation (Strategy pattern)
│   └── seed-data.ts # All brand/string/tension data
├── usecases/        # Business logic classes
│   └── index.ts     # GenerateSetCodeUseCase, ManageBrandDataUseCase, etc.
├── hooks/           # React hooks
│   └── use-string-lab.ts # Main data hook (wires usecases to UI)
├── views/           # Page-level components (5 tabs)
│   ├── SetBuilderView.tsx
│   ├── DecisionAdvisorView.tsx
│   ├── CatalogExplorerView.tsx
│   ├── SavedSetsView.tsx
│   └── DatabaseEditorView.tsx
└── components/ui/   # shadcn/ui components
```

## Key Patterns

- **Strategy Pattern**: Each brand has its own naming strategy (`SavarezStrategy`, `DAddarioStrategy`, etc.)
- **Repository Pattern**: `IStringRepository` contract, implemented by `DexieStringRepository`
- **Seed Data**: All brand data lives in `seed-data.ts`, auto-seeded to IndexedDB on first load
- **No Backend**: 100% client-side, data stored in browser IndexedDB

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Type-check + production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run preview    # Preview production build
```

## UI Stack

- React 18 + TypeScript
- Tailwind CSS + shadcn/ui (New York style)
- Radix UI primitives
- Lucide icons
- Google Fonts: Cinzel (display), Newsreader (serif), Plus Jakarta Sans (sans)

## Data Model

- **Brand** → contains trebles[], basses[], tensions[]
- **TrebleString/BassString** → has specs keyed by tension code (e.g., 'R', '45', 'Normal')
- **StringPhysicalSpec** → per-string gauge/tension data (metric + imperial)
- **DecisionRule** → tone-goal-to-recommendation mapping

## Important Notes

- `@/` alias resolves to `./src/` (vite.config.ts + tsconfig)
- Data version tracked in IndexedDB meta table (currently version 2)
- UI text is in Italian (luthiery terminology)
- PWA-enabled with service worker (`public/sw.js`)
- `noUnusedLocals` and `noUnusedParameters` are disabled in tsconfig
