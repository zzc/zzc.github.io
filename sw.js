importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/00fd22e2bba162340126.js",
    "revision": "54d94e15065068f24c217caabc10ca84"
  },
  {
    "url": "/_nuxt/26e9a26a5b75699a93e6.js",
    "revision": "1f209d4b9f612c8575162dfdabe73639"
  },
  {
    "url": "/_nuxt/27e630975a0b02df964b.js",
    "revision": "6c9169e9082ea645f5b158f85727b1c4"
  },
  {
    "url": "/_nuxt/2979b5faf58610788a5e.js",
    "revision": "27155a97332b2cd6241ebeddf59e72b9"
  },
  {
    "url": "/_nuxt/32cebbc99d2acd5faaba.js",
    "revision": "3f5e82fafb8b70c3a587a24ea09bbf20"
  },
  {
    "url": "/_nuxt/5a63394551e6e9effcad.js",
    "revision": "e87269593c81a0d89d543f93ec3fdff6"
  },
  {
    "url": "/_nuxt/b15c5f1300a06d6c1739.js",
    "revision": "600e457db77efc5dd9e3024b4c9ab0ee"
  },
  {
    "url": "/_nuxt/b2d238c34509f5af81f0.js",
    "revision": "1ee30cef00e5ff299ec0b19872c67061"
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
