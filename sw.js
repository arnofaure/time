// Time Tracker — offline app-shell cache. Bump CACHE_VERSION whenever the
// shell files change so old clients pick up the new version instead of
// serving a stale cache forever.
const CACHE_VERSION = 'time-tracker-v1';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './icons/favicon.svg',
  './icons/favicon.ico',
  './icons/favicon-96x96.png',
  './icons/apple-touch-icon.png',
  './icons/web-app-manifest-192x192.png',
  './icons/web-app-manifest-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(function(cache) { return cache.addAll(SHELL_FILES); })
      .then(function() { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(keys.filter(function(k) { return k !== CACHE_VERSION; }).map(function(k) { return caches.delete(k); }));
    }).then(function() { return self.clients.claim(); })
  );
});

// Network-first for same-origin GETs: always try to fetch the latest version
// when online, and fall back to whatever's cached when offline.
self.addEventListener('fetch', function(event) {
  if (event.request.method !== 'GET') return;
  var url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request).then(function(response) {
      var copy = response.clone();
      caches.open(CACHE_VERSION).then(function(cache) { cache.put(event.request, copy); });
      return response;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        return cached || caches.match('./index.html');
      });
    })
  );
});
