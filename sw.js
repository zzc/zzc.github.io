importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/010d56d62c53393e4861.js",
    "revision": "96c732b36efcaac740bbdbe0280710d1"
  },
  {
    "url": "/_nuxt/0f8e48b7548b6815a9e5.js",
    "revision": "e0b4b675c08446421e67e7c0790279b3"
  },
  {
    "url": "/_nuxt/12ccf0aff28f54dc61c4.js",
    "revision": "e3b82e02ac785aa008585d3891c370a1"
  },
  {
    "url": "/_nuxt/58433dcad9de667f91cf.js",
    "revision": "64610a115701af8ad915cb617c23a7d3"
  },
  {
    "url": "/_nuxt/9ab31ce7420d817c6fcc.js",
    "revision": "601a23e3ab3a281d71955f9c76e65b2a"
  },
  {
    "url": "/_nuxt/ac484b76459ae027a37a.js",
    "revision": "f1e867b51a70f0143b17d748508b3eb7"
  },
  {
    "url": "/_nuxt/c2fea8e84fd8f707c35d.js",
    "revision": "1bfdc0506cb51234f9d71b283aa414e4"
  },
  {
    "url": "/_nuxt/c46595ead910128b2163.js",
    "revision": "1ee316482013e54bb9cc0807115e49cf"
  },
  {
    "url": "/_nuxt/f26a6e7e36402c14fa01.js",
    "revision": "1bd10f626588dbbc14ebc9660d2400bb"
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
