// Dust & Motors: service worker per giocare anche senza connessione.
// Il gioco (index.html) viene preso dalla rete quando c'è, così gli aggiornamenti arrivano subito;
// offline si usa la copia salvata. Motore 3D, font e icone si salvano al primo avvio e poi restano.
const CACHE = 'dust-motors-v3';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // (le risorse di altri siti arrivano "opache": cache.add le rifiuta, quindi si scaricano e si salvano a mano)
      .then(c => Promise.all(CORE.map(u => {
        const req = new Request(u, { mode: u.startsWith('http') ? 'no-cors' : 'same-origin' });
        return fetch(req).then(res => (res.ok || res.type === 'opaque') ? c.put(u, res) : null).catch(() => {});
      })))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Le musiche si caricano "a pezzi" (richieste Range del lettore audio): il file intero si scarica e si
// salva la prima volta, poi i pezzi richiesti si ritagliano dalla copia salvata (funziona anche offline).
async function rangeResponse(req) {
  const cache = await caches.open(CACHE);
  let full = await cache.match(req.url);
  if (!full) {
    const r = await fetch(req.url);
    if (!r.ok) return r;
    await cache.put(req.url, r.clone());
    full = r;
  }
  const buf = await full.arrayBuffer(), size = buf.byteLength;
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  let start = 0, end = size - 1;
  if (m && m[1] !== '') { start = parseInt(m[1], 10); if (m[2] !== '') end = Math.min(parseInt(m[2], 10), size - 1); }
  else if (m && m[2] !== '') { start = Math.max(0, size - parseInt(m[2], 10)); }   // ultimi N byte
  return new Response(buf.slice(start, end + 1), {
    status: 206, statusText: 'Partial Content',
    headers: {
      'Content-Type': full.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Range': 'bytes ' + start + '-' + end + '/' + size,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges': 'bytes'
    }
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.headers.has('range')) { e.respondWith(rangeResponse(req).catch(() => fetch(req))); return; }
  const url = new URL(req.url);
  const isPage = req.mode === 'navigate' || (url.origin === location.origin && url.pathname.endsWith('.html'));
  if (isPage) {
    // prima la rete (versione aggiornata), poi la copia salvata
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }
  // tutto il resto: prima la copia salvata, poi la rete (e si salva per la prossima volta)
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
