// Aussie 10 - Service Worker
// 离线缓存策略：cache-first（已缓存优先，回网络兜底）

const CACHE_NAME = 'aussie10-v3-2026-08-03';
const PRECACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './icons/favicon-16.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;600&display=swap'
];

// 安装：预缓存所有核心资源
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// 激活：清理旧版本缓存
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

// 请求拦截：cache-first
self.addEventListener('fetch', function (event) {
  const req = event.request;
  if (req.method !== 'GET') return;
  // 只处理 http(s)，跳过 chrome-extension 等
  const url = new URL(req.url);
  if (!/^https?:$/.test(url.protocol)) return;

  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        // 同源资源写入缓存
        if (res && res.status === 200 && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // 离线兜底：导航请求返回 index.html
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
