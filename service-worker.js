"use strict";var precacheConfig=[["/index.html","58e18007f514c5cc34d2a8cf7ac74062"],["/static/css/main.f9ea9f6d.css","6db20f6b4c9eedc0f94d08289d65f0ee"],["/static/js/main.fcbce2bc.js","f6da2ae6b463cdb851f3c38e2f48b2b1"],["/static/media/AdithyaNR-resume.c861eadb.pdf","c861eadb4135973920ae42874c645f08"],["/static/media/about.663d874c.png","663d874c2a524469ffc8560046fd67f5"],["/static/media/aikya.2ce62db0.jpeg","2ce62db0c2335b664cad5f4d045cd1cc"],["/static/media/bapspatil.fc43e3ee.jpeg","fc43e3ee15d0f11d3e97b6bcd8cffb22"],["/static/media/bg.544a7337.png","544a733738d5c2244de9a0ef38f83f30"],["/static/media/bgmain.e32929d7.png","e32929d76333b20c13124d04a2cd5a7e"],["/static/media/contact.797f50ca.png","797f50ca4b9c8b3ea469ce3ef6336bfc"],["/static/media/dugout.a5e15d1c.jpeg","a5e15d1c414b0214240ba7293e2d9159"],["/static/media/mountain.f34ad748.jpeg","f34ad748503673a3b2cd04e4c9f8049c"],["/static/media/rnsit.0378de47.jpeg","0378de47216ca6ef258206d65323b239"],["/static/media/shutterup.125f8600.jpeg","125f860059ccb9d9b083d8f96e734aed"],["/static/media/wallart.d4d6567a.jpeg","d4d6567a11955d3753f620636ba1290f"],["/static/media/webdev.adbdc40f.png","adbdc40f6cee17281f00162961acdf73"],["/static/media/yelpcamp.be0cd4a0.jpeg","be0cd4a03df8779a9d372ffc390721ba"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});