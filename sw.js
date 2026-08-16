// Jossee Coffee — offline-first service worker
//
// IMPORTANT: bump CACHE_NAME (v1 -> v2 -> v3 ...) with every deploy that
// changes index.html, manifest.json, or any core asset. The fetch handler
// below uses network-first for navigations/HTML/JS/CSS so visitors get
// updates immediately when online, but the cache name still needs to change
// so the old cache entries get cleaned up in the activate handler.
const CACHE_NAME = 'jossee-coffee-v2';
const CORE_ASSETS = ['./', './index.html', './manifest.json', './assets/jossee-logo.png'];

// Extensions treated as static/immutable assets — safe to serve cache-first
// since images rarely change and it keeps the offline experience fast.
const STATIC_ASSET_EXTENSIONS = /\.(png|jpg|jpeg|webp|gif|svg|ico|woff2?|ttf)$/i;

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

  const isStaticAsset = STATIC_ASSET_EXTENSIONS.test(new URL(req.url).pathname);

  if (isStaticAsset) {
    // Cache-first: images/fonts rarely change, so prefer speed + offline support.
    event.respondWith(
      caches.match(req).then((cached) => {
        return (
          cached ||
          fetch(req)
            .then((response) => {
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
    return;
  }

  // Network-first: HTML/JS/CSS/navigations always try the network first so
  // updates (price changes, new products, bug fixes) reach returning
  // visitors immediately while they're online. Falls back to cache only
  // when offline or the network request fails.
  event.respondWith(
    fetch(req)
      .then((response) => {
        if (response && response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, clone)).catch(() => {});
        }
        return response;
      })
      .catch(() => caches.match(req))
  );
});

// Lets the page ask "is there a newer version waiting?" and, if the page
// wants to, activate it immediately without waiting for all tabs to close.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
