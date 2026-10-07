<p align="center">
  <img src="icon-512.png" alt="Dust & Motors" width="200">
</p>

<h1 align="center">Dust & Motors – Racers</h1>

<p align="center">
  <b>Gioco di rally 3D che si gioca nel browser, su computer e su telefono.</b><br>
  12 stage su asfalto, sterrato, ghiaia, sabbia, fango e neve, dall'alba alla notte, con pioggia e neve.
</p>

<p align="center">
  <img alt="Stato" src="https://img.shields.io/badge/stato-BETA%20v0.1-orange">
  <img alt="Piattaforme" src="https://img.shields.io/badge/piattaforme-PC%20%7C%20Android%20%7C%20iPhone-2ea44f">
  <img alt="Lingue" src="https://img.shields.io/badge/lingue-9-blue">
  <img alt="Motore" src="https://img.shields.io/badge/three.js-r128-black">
</p>

---

> [!WARNING]
> **Versione beta.** Il gioco è completo e giocabile, ma è ancora in sviluppo:
> guida, grafica, suoni e stage possono cambiare da una versione all'altra e qualche
> problema è ancora possibile. Le segnalazioni sono benvenute (vedi [Segnalare un problema](#segnalare-un-problema)).

## Gioca subito

**▶ [Apri Dust & Motors](https://karmatv80.github.io/DUST-MOTORS_Racing-beta-v0.1/)**

Non serve installare nulla: si apre nel browser. Sul telefono si può anche installare
come app (vedi [Installarlo sul telefono](#installarlo-sul-telefono)).

🌐 **Lingue**: italiano, English, Español, Français, Deutsch, Português, Русский, 中文, 日本語
(si cambiano dalla voce *Lingua · Language* del menu principale).

---

## Indice

- [Il gioco](#il-gioco)
- [Modalità di gioco](#modalità-di-gioco)
- [Gli stage](#gli-stage)
- [Le auto](#le-auto)
- [La guida](#la-guida)
- [Regole di gara e penalità](#regole-di-gara-e-penalità)
- [Telecamere e replay](#telecamere-e-replay)
- [Comandi](#comandi)
- [Grafica e audio](#grafica-e-audio)
- [Installarlo sul telefono](#installarlo-sul-telefono)
- [Requisiti](#requisiti)
- [Limiti noti della beta](#limiti-noti-della-beta)
- [Struttura del progetto](#struttura-del-progetto)
- [Pubblicare e aggiornare](#pubblicare-e-aggiornare)
- [Segnalare un problema](#segnalare-un-problema)
- [Riconoscimenti](#riconoscimenti)

---

## Il gioco

Dust & Motors è un rally a tappe contro il cronometro. Si corre da soli, uno stage alla
volta, cercando di fare il tempo migliore. Ogni stage ha tracciato, fondo, ora del giorno e
meteo sempre uguali, così si può imparare la strada e migliorare.

Lungo il percorso si incontrano:

- **Tornanti e curve strette**, più frequenti nei passi di montagna.
- **Fondo irregolare** su sterrato, ghiaia, sabbia e neve, che si sente nella guida senza stravolgere il tracciato.
- **Ponti e gallerie** illuminate, comprese quelle scavate nella roccia sulla costa.
- **Pozzanghere** che fanno perdere aderenza di colpo e rallentano l'auto.
- **Alberi, rocce, case, guard-rail, staccionate, balle di fieno**: vegetazione e paesaggio cambiano
  con l'ambientazione (pinete e foreste fitte in montagna, palme e cactus nel deserto…).
- **Pubblico** a bordo strada che si scansa quando l'auto si avvicina troppo.
- **Partenza e arrivo** con tribune avvolgenti, maxischermi con il tempo in diretta, cartelloni
  degli sponsor e il pubblico che festeggia con bandiere e striscioni.
- **Intermedi** con il distacco dal miglior tempo.

## Modalità di gioco

| Modalità | Descrizione |
|---|---|
| **Carriera** | I 12 stage in sequenza. Conta il tempo totale e viene salvato il record migliore. |
| **Time Attack** | Si sceglie un singolo stage e si prova a battere il record di quella pista. Dalla pausa si può cambiare stage al volo. |

Dopo aver scelto la modalità (e, nel Time Attack, la pista) si sceglie l'**auto**, con la sua
scheda delle caratteristiche. La prima volta il gioco chiede il **nome del pilota**, che compare
in classifica e si può cambiare dalle Opzioni.

A fine stage il riquadro del risultato mostra la **classifica** della pista (con la propria
posizione) e permette di passare allo stage successivo, riprovare, rivedere la prova nel
**replay** o scegliere un'altra pista.

Dalla schermata iniziale:

- **Showroom**: le quattro auto da vicino, con trazione, motore e caratteristiche a confronto.
- **Classifica**: i 10 migliori tempi di ogni pista e della carriera completa, con pilota e auto.
- **Opzioni**: nome del pilota, comandi, risoluzione, schermo intero e azzeramento dei record.
- **Lingua · Language**: lingua del gioco.

## Gli stage

L'ordine della carriera:

| # | Stage | Fondo | Ora del giorno | Meteo |
|---|---|---|---|---|
| 1 | Colline di campagna | Asfalto | Mezzogiorno | — |
| 2 | Sentiero nel bosco | Sterrato | Mattino | — |
| 3 | Cave di pietra | Ghiaia | Pomeriggio | — |
| 4 | Dune rosse | Sabbia | Caldo torrido | — |
| 5 | Periferia di notte | Asfalto bagnato | Notte | Pioggia forte |
| 6 | Altstadt München | Asfalto cittadino | Crepuscolo | — |
| 7 | Altopiano all'alba | Ghiaia fine | Alba | — |
| 8 | Palude al tramonto | Fango | Tramonto | Pioggia |
| 9 | Pineta al crepuscolo | Sterrato duro | Crepuscolo | — |
| 10 | Passo innevato | Neve | Cielo velato | Nevicata |
| 11 | Foresta notturna | Misto | Notte | Pioggia |
| 12 | Costa Brava | Asfalto di montagna | Pomeriggio | — |

Due stage hanno un'ambientazione particolare:

- **Altstadt München**: centro storico ispirato a Monaco di Baviera, con palazzi, strade tra
  gli isolati, pubblico, bandiere, striscioni e l'albero di maggio (Maibaum).
- **Costa Brava**: strada di montagna stretta e tortuosa, con la parete di roccia da un lato,
  lo strapiombo dall'altro e il guard-rail per tutto il percorso.

Negli stage notturni e al crepuscolo si accendono i fari dell'auto, i lampioni e le luci delle
gallerie illuminano davvero la strada.

## Le auto

| Auto | Trazione | Carattere |
|---|---|---|
| **Hatch WRC** | Integrale 4x4 | Compatta da rally moderna: precisa e facile da tenere in traiettoria, va forte su ogni fondo. |
| **Coupé Classica '70** | Posteriore | Leggera di coda, si guida di traverso e va dosata con il gas. |
| **Rally Raid** | Integrale 4x4 | Alta e robusta, digerisce salti e buche ma è più pigra nei cambi di direzione. |
| **Buggy** | Posteriore | Carreggiata larghissima: agilissimo e reattivo, nervoso sullo sterrato veloce. |

Ogni auto ha il suo suono del motore, l'abitacolo con pilota e navigatore, volante che gira con
lo sterzo e cruscotto con contagiri e tachimetro funzionanti.

## La guida

La guida è pensata per essere da rally, non da arcade:

- **Sterzo con ritardo**: bisogna anticipare la curva e impostarla prima.
- **Fondi diversi**: ogni fondo ha aderenza, frenata e comportamento delle gomme propri. Sull'asfalto
  l'auto è precisa, su sabbia, fango e neve scivola e frena molto di più.
- **Fuori pista**: l'auto rallenta e diventa un po' più scivolosa.
- **Cambio automatico a 5 marce**.
- **Pozzanghere**: perdita netta di aderenza, rallentamento e vibrazione.
- **Urti** con guard-rail e ostacoli: se l'impatto è di striscio l'auto si riallinea e prosegue.
- **Salti e atterraggi** sui dossi, con sospensioni che lavorano su ogni ruota.
- **Ribaltamento**: entrando troppo veloci in curva l'auto può alzarsi su due ruote e ribaltarsi.
  Il pubblico accorre a rimetterla sulle ruote, nel senso di marcia.

## Regole di gara e penalità

Le penalità compaiono in alto al centro, con il totale della tappa.

| Situazione | Penalità |
|---|---|
| Auto ribaltata o finita in acqua, rimessa in strada | +3 s |
| Ogni 4 s passati fuori pista | +1 s |
| Troppo tempo fermi o lenti fuori pista: il motore si surriscalda ed **esplode** | +5 s, auto rimessa in pista |

## Telecamere e replay

**Sei telecamere in gara**, da cambiare con un tasto in qualsiasi momento:

| Telecamera | Descrizione |
|---|---|
| Inseguimento | Dietro l'auto, la vista classica. |
| Inseguimento ravvicinato | Più vicina e più bassa. |
| Inseguimento lontano | Più distante e più alta. |
| Aerea | Dall'alto, per leggere bene le curve. |
| Cofano | Sopra il cofano. |
| Abitacolo | Dagli occhi del pilota, con mani, volante e cruscotto. |

Nella visuale abitacolo si possono regolare dal menu di pausa (*Opzioni*) **altezza del sedile**,
**posizione del sedile** e **campo visivo (FOV)**. Telecamera e regolazioni restano salvate.

Se un albero, una casa o un altro oggetto si mette tra la telecamera e l'auto, diventa
trasparente per lasciarla vedere.

**Replay**: a fine stage si può rivedere la prova con una regia televisiva che cambia
inquadratura ogni pochi secondi: telecamere fisse a bordo pista con teleobiettivo,
inseguimento, ripresa laterale, elicottero, frontale e orbita attorno all'auto.

## Comandi

### Tastiera

| Azione | Tasti |
|---|---|
| Sterzo | ← → oppure A D |
| Acceleratore | ↑ oppure W |
| Freno / retromarcia | ↓ oppure S |
| Cambia telecamera | C |
| Pausa | Esc oppure P |
| Conferma nei menu | Invio |

### Joypad (Xbox, PlayStation e compatibili)

| Azione | Tasti |
|---|---|
| Sterzo | Levetta sinistra oppure croce |
| Acceleratore | RT / R2 oppure A / ✕ |
| Freno / retromarcia | LT / L2 oppure B / ○ |
| Cambia telecamera | Y / △ oppure View / Share |
| Pausa e conferma | Start / Options, A / ✕ |

Lo sterzo è analogico, con zona morta e sensibilità regolabili. Se il controller la
supporta, c'è anche la vibrazione.

Tutti i tasti di tastiera e joypad si possono **riassegnare** dal menu *Comandi*, che
mostra anche una diagnostica per i joypad non standard. Tutti i menu si usano con tastiera,
joypad, mouse o tocco.

### Touch (telefono e tablet)

| Zona | Funzione |
|---|---|
| Metà sinistra | **Sterzo analogico**: appoggia il pollice dove vuoi e trascina a destra o sinistra. |
| GAS / FRENO | In basso a destra. Si può far scivolare il dito da un pedale all'altro. |
| 🎥 / ⏸ | In alto a destra: cambia telecamera e pausa. |

Il telefono va tenuto **in orizzontale**. Se lo giri in verticale durante la gara, il gioco va
in pausa. Nel replay basta un tocco per uscire. Se il telefono lo supporta, vibra negli urti.

## Grafica e audio

- **Grafica 3D** in tempo reale con three.js: ombre, nebbia, cielo e illuminazione diversi per ogni ora del giorno.
- **Paesaggi**: alberi di specie e altezze diverse secondo l'ambientazione (abeti, larici, pini,
  querce, betulle, palme, ulivi…), rocce e pareti spigolose, montagne, case di campagna appoggiate al terreno.
- **Texture procedurali** per strada, erba, roccia, legno e tutti gli elementi di contorno, con
  fondi stradali variati.
- **Effetti**: nubi di polvere e spruzzi che cambiano con fondo, acqua e velocità, segni delle
  gomme su asfalto, erba e sterrato, pioggia e neve, erba che si muove al vento.
- **Luci**: fari dell'auto, lampioni e luci delle gallerie che illuminano strada e auto.
- **Auto dettagliate**: sottoscocca, abitacolo con roll-bar, vetri trasparenti, pilota animato.
- **Audio sintetizzato**: motore diverso per ogni auto, gomme che cambiano suono col fondo,
  sgommate, urti diversi per metallo, legno, pietra e altri materiali, ribaltamenti, schizzi e scoppi.
- **Colonna sonora** con un tema per i menu e un brano per gli stage, con dissolvenza tra i
  brani. In gara la musica è più bassa per lasciare spazio al motore.
- **Risoluzione regolabile**, da 540p a 4K. Su telefono parte a 720p.

## Installarlo sul telefono

Il gioco è un'**app web installabile (PWA)**. Una volta installato:

- si apre dall'icona sulla schermata Home;
- è a schermo intero, in orizzontale, senza le barre del browser;
- funziona **anche senza connessione** dopo il primo avvio.

**Android (Chrome)**: apri il link del gioco → menu **⋮** → **Installa app** oppure *Aggiungi a schermata Home*.

**iPhone / iPad (Safari)**: apri il link → tasto **Condividi** → **Aggiungi alla schermata Home**.

## Requisiti

- Un browser recente con WebGL: Chrome, Edge, Firefox o Safari.
- Connessione internet al primo avvio, per scaricare il motore 3D. Poi, con l'app installata, si gioca anche offline.
- **PC**: tastiera oppure joypad.
- **Telefono / tablet**: schermo touch. Su dispositivi meno recenti conviene abbassare la risoluzione dalle Opzioni.

## Limiti noti della beta

- **iPhone**: Safari non permette di bloccare l'orientamento. Se il telefono è in verticale,
  il gioco chiede di ruotarlo. Lo schermo intero vero si ha solo aprendo il gioco dall'icona sulla Home.
- **Prestazioni**: sui telefoni economici o vecchi gli stage più ricchi (città, foreste fitte)
  possono scattare. Abbassare la risoluzione aiuta.
- **Record e impostazioni** sono salvati solo nel browser del dispositivo: non si sincronizzano
  tra PC e telefono e si perdono cancellando i dati del sito.
- **Traduzioni**: le scritte disegnate sugli schermi e sugli striscioni in pista restano per ora in italiano.
- **Equilibrio della guida**: la fisica è ancora in fase di regolazione e può cambiare tra le versioni.

## Struttura del progetto

Il gioco è un'unica pagina HTML: grafica, fisica, effetti sonori e texture sono tutti generati
dal codice. Solo la colonna sonora è in file mp3, nella cartella `musiche` (se mancano, il gioco
usa una musica sintetizzata di riserva).

```
DUST-MOTORS_Racing-beta-v0.1/
├── index.html              # il gioco completo
├── manifest.webmanifest    # nome, icona, schermo intero e orientamento dell'app
├── sw.js                   # service worker: gioco offline e aggiornamenti
├── icon-192.png            # icone dell'app
├── icon-512.png
├── icon-maskable-512.png   # icona adattiva per Android
├── musiche/                # colonna sonora (mp3)
└── README.md
```

**Tecnologie**: HTML, CSS e JavaScript senza framework, [three.js](https://threejs.org/) r128
per il 3D, Web Audio API per tutti i suoni, Gamepad API per i joypad, Touch Events e Service Worker.

## Pubblicare e aggiornare

Il gioco è pubblicato con **GitHub Pages**:

1. *Settings* → *Pages* → *Branch*: `main`, cartella `/ (root)` → *Save*.
2. Dopo un paio di minuti il gioco è online su
   [karmatv80.github.io/DUST-MOTORS_Racing-beta-v0.1](https://karmatv80.github.io/DUST-MOTORS_Racing-beta-v0.1/).

Per aggiornarlo basta caricare il nuovo `index.html` al posto del vecchio. Chi ha l'app
installata riceve l'aggiornamento alla prima apertura con internet.

Per provarlo in locale serve un piccolo server web, perché il service worker non funziona
aprendo il file direttamente:

```bash
python -m http.server 8000
```

poi si apre `http://localhost:8000` nel browser.

## Segnalare un problema

Essendo una beta, ogni segnalazione aiuta. Apri una
[segnalazione (Issue)](https://github.com/KarmaTV80/DUST-MOTORS_Racing-beta-v0.1/issues/new) indicando:

- dispositivo e browser (es. *Android 14, Chrome* oppure *Windows 11, Edge*);
- stage, auto e telecamera usati;
- cosa è successo e, se possibile, uno screenshot.

## Riconoscimenti

- [three.js](https://threejs.org/), motore 3D (licenza MIT).
- [Russo One](https://fonts.google.com/specimen/Russo+One), carattere del titolo (SIL Open Font License).

---

<p align="center"><sub>Dust & Motors – Racers · beta v0.1 · © KarmaTV80 · tutti i diritti riservati</sub></p>
