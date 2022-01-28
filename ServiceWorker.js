const CACHE_NAME ="v1_cache_compras_crud";
const urlsToCache = [
    './',
    'https://unpkg.com/vue@next',
    'http://prueba.pwstasp.net/api/conexion_login/productos',
    './img/icono16px.png',
    './img/icono32px.png',
    './img/icono64px.png',
    './img/icono128px.png',
    './img/icono256px.png',
    './img/icono512px.png',
    './img/icono1024px.png',
    './index.html',
    './js/main.js',
    './js/mount.js',
    './css/style.css',
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(
            cache => cache.addAll(urlsToCache).then(
                () => self.skipWaiting()
            ).catch(
                err => console.log('Error en el registro del cache', err)       
            )
        )
    )
})

self.addEventListener("activate", e => {
    const cacheWhiteList = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(
            cachesNames => {
                return Promise.all(
                    cachesNames.map(
                        cacheName => {
                            if(cacheWhiteList.indexOf(cacheName) === -1){
                                return caches.delete(cacheName);
                            }
                        }
                    )
                )
            }
        ).then(
            () => self.clients.claim()            
        )
    )
})

self.addEventListener("fetch", e =>{
    e.respondWith(
        caches.match(e.request).then(
            res => {
                if(res){
                    return res
                }else{
                    return fetch(e.request)
                }
            }
        )
    )
})