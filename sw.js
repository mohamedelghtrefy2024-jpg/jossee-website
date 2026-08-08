// Jossee Coffee — minimal offline-first service worker
const CACHE_NAME = 'jossee-coffee-v1';
const CORE_ASSETS = ['./', './index.html', './manifest.json', './assets/jossee-logo.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Only handle GET requests on http(s) — chrome-extension://, data:, blob:, etc.
  // are not cacheable and must be left to the browser's default handling,
  // otherwise cache.put() throws "unsupported scheme".
  if (req.method !== 'GET' || !req.url.startsWith('http')) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      return (
        cached ||
        fetch(req)
          .then((response) => {
            // Only cache successful, basic (same-origin) responses.
            if (response && response.ok && response.type === 'basic') {
              const clone = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
            }
            return response;
          })
          .catch(() => cached)
      );
    })
  );
});
