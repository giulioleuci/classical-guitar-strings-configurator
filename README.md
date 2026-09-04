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

Il progetto è distribuito tramite GitHub Pages. Per aggiornare tramite script locale:

```bash
npm run build
npx gh-pages -d dist
```

### Risoluzione problemi Deploy (GitHub Actions)

Se la pipeline automatica di GitHub Actions fallisce con l'errore:
> `Branch "main" is not allowed to deploy to github-pages due to environment protection rules.`

È necessario configurare le regole di protezione dell'ambiente su GitHub:

1. Vai sul repository GitHub -> **Settings** (Impostazioni).
2. Nel menu a sinistra, seleziona **Environments** (Ambienti).
3. Clicca sull'ambiente **`github-pages`**.
4. In **Deployment branches and tags** (Rami e tag di deployment):
   - Seleziona **All branches** per consentire il deploy da qualsiasi ramo, oppure
   - Aggiungi una regola di deployment branch per il ramo **`main`** (o `master`).
5. In alternativa, in **Settings** -> **Pages**, assicurati che la sorgente (*Source*) sia impostata su **GitHub Actions**.

## Licenza

Progetto sperimentale a fini didattici e di ricerca. I dati tecnici delle corde appartengono ai rispettivi produttori.
