importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/30fe58f7ae87fed87e7b.js",
    "revision": "5b5990732afc125fd8cd327464472719"
  },
  {
    "url": "/_nuxt/3e9de23bf9fe4299ca8d.js",
    "revision": "12e28f59365dc28dfcb370ef5e1e818e"
  },
  {
    "url": "/_nuxt/4d57ba6db037aaaea700.js",
    "revision": "f0424e8c3d7cd1423a52ab8ae9d7e1a0"
  },
  {
    "url": "/_nuxt/6eb5a3f149476483179a.js",
    "revision": "9ef62af25a3067e56424f9003e670c61"
  },
  {
    "url": "/_nuxt/865b3ad8c03f5de77ac7.js",
    "revision": "7c5f35858cb011dffee3355807a8d9b6"
  },
  {
    "url": "/_nuxt/9fb32f67b12ad549237d.js",
    "revision": "a12e5adc20d4551dbfd8bc3ac1070816"
  },
  {
    "url": "/_nuxt/aae77eb7561ff7bdb938.js",
    "revision": "fac87d1444e7bc7f1c32b1d4dd3f3035"
  },
  {
    "url": "/_nuxt/cfed4ed80766c0c60950.js",
    "revision": "951da48dff40720fcadbc7a3062ba3c1"
  },
  {
    "url": "/_nuxt/e44375e4d145c7254f00.js",
    "revision": "62b59be54356351c9b1f4cd23682f9ff"
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
