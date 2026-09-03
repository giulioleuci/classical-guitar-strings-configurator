# StringLab — Configuratore di Corde per Chitarra Classica

Un'applicazione web offline-first per configurare insiemi di corde per chitarra classica, con interfaccia interattiva e dati completi delle principali marche.

## Di cosa si tratta

StringLab nasce come progetto sperimentale di intelligenza artificale applicata alla liuteria moderna. L'idea è semplice: mettere a disposizione del chitarrista uno strumento che unisca dati tecnici precisi con un'esperienza d'uso elegante.

Il percorso di creazione ha seguito un processo interamente guidato dall'AI:

- **Dati raccolti tramite Perplexity** — ricerca accurata di specifiche tecniche, codici e tolleranze delle corde delle principali marche (D'Addario, Savarez, Augustine, La Bella, Hannabach, Royalplux, e altre)
- **Dati organizzati con Google Gemini** — strutturazione e normalizzazione delle informazioni in un modello dati coerente e utilizzabile
- **Applicazione realizzata con Bolt.new** — sviluppo rapidissimo dell'intera architettura frontend, dalla persistenza locale alla grafica
- **Raffinata con Google Antigravity** — ottimizzazione del design, correzione dei dettagli e perfezionamento dell'esperienza utente

## Funzionalità

- **Costruttore di insiemi** — seleziona corde treble e bassa tensione singolarmente per creare il set personalizzato
- **Esperto decisionale** — raccomandazioni basate sul tono desiderato e sullo stile di esecuzione
- **Catalogo marche** — esplora le offerte di ogni produttore con specifiche tecniche complete
- **Insiemi salvati** — salva e gestisci i tuoi insiemi preferiti nel database locale
- **Editor database** — aggiungi e modifica marche e corde direttamente dall'interfaccia

## Come funziona

L'applicazione è un **Progressive Web App (PWA)** che funziona completamente offline. Tutti i dati sono memorizzati nel browser tramite IndexedDB (Dexie.js), senza necessità di un server backend.

### Stack tecnico

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + shadcn/ui
- Dexie.js (IndexedDB wrapper)
- Lucide Icons

### Avvio locale

```bash
npm install
npm run dev
```

L'app sarà disponibile su `http://localhost:5173`

### Build di produzione

```bash
npm run build
npm run preview
```

## Deploy

Il progetto è distribuito tramite GitHub Pages. Per aggiornare:

```bash
npm run build
npx gh-pages -d dist
```

## Licenza

Progetto sperimentale a fini didattici e di ricerca. I dati tecnici delle corde appartengono ai rispettivi produttori.
