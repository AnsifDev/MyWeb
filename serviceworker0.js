self.addEventListener("install", e=>{
    alert("ServiceWorker first load suceeded");
    e.waitUntil(caches.open("static").then(cache=>{
        return cache.addAll(["./begin.html", "./img1.png", "./index.html"]);
    }))
})
self.addEventListener("fetch", e=>{
    caches.match(e.request).then(req=>{
        return req || e request;
    })
})
