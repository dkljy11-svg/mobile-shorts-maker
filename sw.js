const C="mobile-shorts-no-api-v1";const F=["./","./index.html","./manifest.webmanifest","./assets/sample1.jpeg","./assets/sample2.jpeg","./assets/sample3.jpeg"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));