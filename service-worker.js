const CACHE_NAME = 'futurapp-cache-v1';
const urlsToCache = ['index.html','landing.html','home.html','style.css','app.js','manifest.json','icon-512.png'];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(response=>{
      return response || fetch(e.request);
    })
  );
});
