"use strict";var precacheConfig=[["/index.html","7aa7b1498f2e3f9771a246d8b38ab928"],["/static/css/main.ecb83c8d.css","21a8a5bf9d70cea66a2e9fe1d44ca9e0"],["/static/js/main.5a0dabad.js","8f1d4da68110334ad8b738c557e318b1"],["/static/media/AdithyaNR-resume.c861eadb.pdf","c861eadb4135973920ae42874c645f08"],["/static/media/about.663d874c.png","663d874c2a524469ffc8560046fd67f5"],["/static/media/aikya.2ce62db0.jpeg","2ce62db0c2335b664cad5f4d045cd1cc"],["/static/media/bapspatil.2d14196d.jpeg","2d14196db5f6777406c55bd34594c899"],["/static/media/bg.544a7337.png","544a733738d5c2244de9a0ef38f83f30"],["/static/media/bgmain.e32929d7.png","e32929d76333b20c13124d04a2cd5a7e"],["/static/media/contact.797f50ca.png","797f50ca4b9c8b3ea469ce3ef6336bfc"],["/static/media/dugout.204a3067.jpeg","204a3067ffad4b69c3ed60e87d08bc9f"],["/static/media/gitgud.c3f51c41.jpeg","c3f51c414194fa41cd3919c072f0cdbb"],["/static/media/grandmentor.4bb8f657.jpeg","4bb8f657f57d8f6d657185a51f543f00"],["/static/media/nikhil.91b67caf.jpeg","91b67caf21f93447b9066d90f37d167c"],["/static/media/rake.6ae88024.jpeg","6ae88024afacecac0066bc16ecfc8e61"],["/static/media/rnsit.5b0dc1ab.jpeg","5b0dc1ab15bfb3b913f97f17251fa593"],["/static/media/spazzo.5a5f7f0a.jpeg","5a5f7f0a678a3f815216d27d29e75d3d"],["/static/media/wallart.5f5fac36.jpeg","5f5fac368ed4adbabcb9a2ef5efab769"],["/static/media/webdev.adbdc40f.png","adbdc40f6cee17281f00162961acdf73"],["/static/media/wyr.ba1a2075.jpeg","ba1a2075a0951919fa6cad088b5c10ec"],["/static/media/yelpcamp.e8a1ac2a.jpeg","e8a1ac2acda58b47df0e94b17f8029d1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});