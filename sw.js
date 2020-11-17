importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12ccf0aff28f54dc61c4.js",
    "revision": "c02ca50d34c22ac3d13823c6df4e3022"
  },
  {
    "url": "/_nuxt/2ab838c9a5828219ac15.js",
    "revision": "01fd03acdf304a508a406eb80f1a8584"
  },
  {
    "url": "/_nuxt/2e0c70034c3efc80c7a5.js",
    "revision": "a2e4e9bb1e5fc530ac7090b876e81293"
  },
  {
    "url": "/_nuxt/48b278c430940f6ae8a4.js",
    "revision": "79e729f76ed1d820476e39d21685072c"
  },
  {
    "url": "/_nuxt/58433dcad9de667f91cf.js",
    "revision": "aac6b0be435107b3e526d43d00d49a3a"
  },
  {
    "url": "/_nuxt/8270617ecf513df4b258.js",
    "revision": "f5fa52eeba11c167e91943e28c777af1"
  },
  {
    "url": "/_nuxt/8d7c1b8d31ba74d1c26b.js",
    "revision": "91f51d9b58009e0089d0c623105e4621"
  },
  {
    "url": "/_nuxt/ac484b76459ae027a37a.js",
    "revision": "f1e867b51a70f0143b17d748508b3eb7"
  },
  {
    "url": "/_nuxt/bbcf26652327a0d5253a.js",
    "revision": "7773916812bdcddbcab57dd9f30c514a"
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
