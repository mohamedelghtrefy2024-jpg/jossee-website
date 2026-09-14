// ============================================================
// Jossee Coffee — Service Worker
// ------------------------------------------------------------
// Bump CACHE_VERSION any time index.html / manifest.json / the
// app shell changes, so returning visitors get the new files
// instead of a stale cached copy. Old versioned caches are
// deleted automatically on activate.
// ============================================================
const CACHE_VERSION = 'jossee-v1';
const CACHE_NAME = `jossee-cache-${CACHE_VERSION}`;

// Only the app shell is precached on install. Product photos and
// other assets are cached the first time they're actually requested
// (see the fetch handler below) — that way this list never has to be
// kept in sync with everything in /assets.
const APP_SHELL = [
    './',
    './index.html',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(
                keys
                    .filter((key) => key.startsWith('jossee-cache-') && key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            ))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

    if (isHTML) {
        // Network-first for the page itself, so online visitors always see
        // the latest prices/content; falls back to the last cached copy
        // (or the cached index.html) when offline.
        event.respondWith(
            fetch(req)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req).then((res) => res || caches.match('./index.html')))
        );
        return;
    }

    // Cache-first for everything else (images, manifest, etc.), with a
    // network fallback that fills the cache for next time.
    event.respondWith(
        caches.match(req).then((cached) => {
            if (cached) return cached;
            return fetch(req)
                .then((res) => {
                    if (res && res.status === 200 && res.type === 'basic') {
                        const copy = res.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
                    }
                    return res;
                })
                .catch(() => cached);
        })
    );
});
