const CACHE_NAME = 'version 1';
const urlsToCache = [
    'index.html',
    '/localhost:3000',
    '/About.js',
    '/Contact.js',
    '/',
    '/ApiData.js'
];
const self = this;
//install the sw
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll(urlsToCache)
        })
    )
})

//listen foe request
self.addEventListener('fetch', (event) => {
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request)
            .then( (res) => {
                if(res){
                    return res;
                }
                let requestUrl= event.request.clone();
                return fetch(requestUrl)
            })
        )
    }
})
//activate the sw ******if there exits any cache then remove and update cache*****
// self.addEventListener('activate', (event) => {
//     const cacheWhitelist = [];
//     cacheWhitelist.push(CACHE_NAME) ;
//     event.waitUntil(
//         caches.keys()
//         .then((cacheNames) =>{
//             Promise.all(cacheNames.map((cacheName) => {
//                 if(!cacheWhitelist.includes(cacheName)){
//                     return caches.delete(cacheName)
//                 }
//             }))
//         })
//     )
// })