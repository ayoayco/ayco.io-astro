/**
 * Note: @ayco/astro-sw integration injects variables `__prefix`, `__version`, & `__assets`
 * -- find usage in `astro.config.mjs` integrations
 * @see https://ayco.io/n/@ayco/astro-sw
 */
const cacheName = `${__prefix ?? 'app'}-v${__version ?? '000'}`
const forceLogging = true;

const addResourcesToCache = async (resources) => {
    const cache = await caches.open(cacheName);
    console.info('adding resources to cache...', { force: !!forceLogging, context: 'ayco-sw', data: resources })
    try {
        await cache.addAll(resources);
    } catch(error) {
        console.error('failed to add resources to cache; make sure requests exists and that there are no duplicates', error);
    }
};

const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);

    if (response.ok) {
        console.info('adding one response to cache...', request.url)
        cache.put(request, response);
    }
};


const networkFirst = async ({ request, fallbackUrl }) => {

    const cache = await caches.open(cacheName);

    try {
        // Try to get the resource from the network for 5 seconds
        const responseFromNetwork = await fetch(request.clone());
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        console.info('using network response', responseFromNetwork.url);
        return responseFromNetwork;

    } catch (error) {

        // Try get the resource from the cache
        const responseFromCache = await cache.match(request);
        if (responseFromCache) {
            console.info('using cached response...', responseFromCache.url);
            return responseFromCache;
        }

        // Try the fallback
        const fallbackResponse = await cache.match(fallbackUrl);
        if (fallbackResponse) {
            console.info('using fallback cached response...', fallbackResponse.url)
            return fallbackResponse;
        }

        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
};

self.addEventListener('activate', (event) => {
    console.info('activating service worker...')
});

self.addEventListener('install', (event) => {

    console.info('installing service worker...')
    self.skipWaiting(); // go straight to activate

    event.waitUntil(
        addResourcesToCache(__assets ?? [])
    );
});

self.addEventListener('fetch', (event) => {
    console.info('fetch happened', {data: event});
    
    event.respondWith(
        networkFirst({
            request: event.request,
            fallbackUrl: './',
        })
    );
});