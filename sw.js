importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0b5c360a018cab349837.js",
    "revision": "a8c8a7d1952d88a96d0421206c411e38"
  },
  {
    "url": "/_nuxt/252e739cd282def82f96.js",
    "revision": "a9b11940fec0e3119fff38c166e1e45b"
  },
  {
    "url": "/_nuxt/27e630975a0b02df964b.js",
    "revision": "6c9169e9082ea645f5b158f85727b1c4"
  },
  {
    "url": "/_nuxt/2867a6e3e79980f7eca3.js",
    "revision": "45a1bf77aa34c31d81135c66eb69a4c7"
  },
  {
    "url": "/_nuxt/603f08d9c5bb55784f59.js",
    "revision": "a49b0690024d3745cc53e7519dc0cfdc"
  },
  {
    "url": "/_nuxt/96f9a8113cfe70fa718c.js",
    "revision": "f23117e9f0fa40443447f0fd75dc4125"
  },
  {
    "url": "/_nuxt/c252b57b2fe626df240b.js",
    "revision": "2da3893d20d3ef0fdf11f34b0dcf239d"
  },
  {
    "url": "/_nuxt/ce1d5cec6d44091e9c85.js",
    "revision": "03a3d65e0765035e664d306670d8e596"
  },
  {
    "url": "/_nuxt/cfed4ed80766c0c60950.js",
    "revision": "951da48dff40720fcadbc7a3062ba3c1"
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
