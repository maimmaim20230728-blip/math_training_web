/*
 * 算数・数学 やさしくトレーニング - Service Worker
 * cache-first。中身を更新したら CACHE の数字を上げてください（例 v1 -> v2）。
 * 図(figure)は問題データに埋め込まれているので、data の9本を入れれば全てオフラインで動く。
 */
var CACHE = "mathtr-v4";
var ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./data/q_e1.js",
  "./data/q_e2.js",
  "./data/q_e3.js",
  "./data/q_e4.js",
  "./data/q_e5.js",
  "./data/q_e6.js",
  "./data/q_j1.js",
  "./data/q_j2.js",
  "./data/q_j3.js"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  // 1つでも欠けると addAll ごと失敗するので、1件ずつ入れて欠品を許容する
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(ASSETS.map(function(url){ return c.add(url).catch(function(){}); }));
  }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// cache-first: あればキャッシュ、無ければ取得してキャッシュ
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit) return hit;
      return fetch(e.request).then(function(res){
        if(res && res.ok && res.type !== "opaque"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){ return caches.match("./index.html"); });
    })
  );
});
