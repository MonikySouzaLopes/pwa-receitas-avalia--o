const cacheName = "receitas-pwa-v2";
const filesToCache = ["/", "index.html", "carnes.html", "doces.html",
    "massas.html", "/js/main.js", "/css/styleCarne.css", "/css/style.css", 
    "/css/styleDoce.css", "/css/styleMassa.css"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("activate", (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== cacheName) {
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});
