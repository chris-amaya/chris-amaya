/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js',
)

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

const {registerRoute} = workbox.routing
const {CacheFirst, NetworkFirst, NetworkOnly} = workbox.strategies

const cacheFirstNetwork = [
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&family=Poppins:wght@300;400&family=Raleway:wght@300;400&display=swap',
  '/img/banner-crm.png',
  '/img/banner-math.png',
  '/img/banner-qr.png',
  '/img/banner-rock.png',
  '/img/main-crm.png',
  '/img/main-math.png',
  '/img/main-qr.png',
  '/img/main-rock.jpg',
  'http://localhost:8000/projects',
  'http://localhost:8000/project/swiss-payments',
  'http://localhost:8000/project/math-fights',
  'http://localhost:8000/project/zoho-crm',
  'http://localhost:8000/project/rock-paper-scissors',
]

registerRoute(({request, url}) => {
  console.log({url})

  if (cacheFirstNetwork.includes(url.href)) return true

  return false
}, new CacheFirst())

registerRoute(new RegExp('http://localhost:8000/projects'), new CacheFirst())
