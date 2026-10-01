// Dust & Motors: service worker per giocare anche senza connessione.
// Il gioco (index.html) viene preso dalla rete quando c'è, così gli aggiornamenti arrivano subito;
// offline si usa la copia salvata. Motore 3D, font e icone si salvano al primo avvio e poi restano.
const CACHE = 'dust-motors-v2';
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

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
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
