let cacheName = "receitas-pwa";
let filesToCache = ["/", "index.html", "carnes.html", "doces.html",
    "massas.html", "/js/main.js", "/css/styleCarne.css", "/css/style.css", 
    "/css/styleDoce.css", "/css/styleMassa.css"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache){
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});