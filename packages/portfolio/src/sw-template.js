/* eslint-disable no-undef */
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js',
)

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

const {registerRoute} = workbox.routing
const {CacheFirst, NetworkFirst, NetworkOnly} = workbox.strategies

const URL_SERVER =
  self.location.hostname === 'localhost'
    ? 'http://localhost:8000'
    : 'https://chrisamaya.com.mx/api'

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
  `${URL_SERVER}/projects}`,
  `${URL_SERVER}project/swiss-payments`,
  `${URL_SERVER}project/math-fights`,
  `${URL_SERVER}project/zoho-crm`,
  `${URL_SERVER}project/rock-paper-scissors`,
]

registerRoute(({request, url}) => {
  console.log({url})

  if (cacheFirstNetwork.includes(url.href)) return true

  return false
}, new CacheFirst())

registerRoute(new RegExp(`${URL_SERVER}/projects`), new CacheFirst())
