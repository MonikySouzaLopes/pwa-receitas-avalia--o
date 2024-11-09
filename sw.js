let cacheName = "receitas-pwa";
let filesToCache = ["/", "/index", "/carnes", "/doces",
    "/massas", "/js/main.js", "/css/styleCarne.css", "/css/style.css", 
    "/css/styleDoce.css", "/css/styleMassa.css", "/images/turma_da_monica.png", "/images/almondega.jpeg",
    "/images/biscoito.jpeg", "/images/bolochocolate.jpeg", "/images/carnepanela.jpeg", "/images/frango.jpeg", 
    "/images/macarraoalho.png", "/images/macarraobranco.jpg", "/images/macarraovermelho.jpg", "/images/magali.png",
    "/images/pudim.jpeg"

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