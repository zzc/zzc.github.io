importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/10392cc200d5bbd55f39.js",
    "revision": "a3d0f7c7addb25b21146a5c315b50515"
  },
  {
    "url": "/_nuxt/262b69c94417da4dc068.js",
    "revision": "1a2be79d9ec844728509b6c7e852062d"
  },
  {
    "url": "/_nuxt/4d57ba6db037aaaea700.js",
    "revision": "f0424e8c3d7cd1423a52ab8ae9d7e1a0"
  },
  {
    "url": "/_nuxt/4f86d565d8152cef7625.js",
    "revision": "62a195fd44a2dbfb642bda631bff1550"
  },
  {
    "url": "/_nuxt/516363676f2dc6d8192f.js",
    "revision": "0751f1db29378391131e9eec4c1ba422"
  },
  {
    "url": "/_nuxt/82ea2e22b321b3480dcc.js",
    "revision": "5ab9de96d0b2d20e7543723207fba442"
  },
  {
    "url": "/_nuxt/93d1dcbc40e4f090849c.js",
    "revision": "351b0375b3fc414dfd8b82b7f6338c7f"
  },
  {
    "url": "/_nuxt/cfed4ed80766c0c60950.js",
    "revision": "951da48dff40720fcadbc7a3062ba3c1"
  },
  {
    "url": "/_nuxt/d727dd282e004aa11b2f.js",
    "revision": "84287d2abce1a12f1b8951ecbfb2f525"
  }
], {
  "cacheId": "zzc-docs",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
