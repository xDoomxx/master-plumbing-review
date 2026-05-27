const CACHE = 'mp-review-v1';

const PRECACHE = [
    'Review Portal.html',
    'Mastery Test 1 - Definition of Terms.html',
    'Mastery Test 2 - Definition of Terms.html',
    'Mastery Test 3 - Definition of Terms.html',
    'Mastery Test 4 - Fixture Unit.html',
    'Mastery Test 5 -Everything Numbers!.html',
    'Mastery Test 6 - Pipe Sizing.html',
    'Mastery Test 7 - Relevant Codes.html',
    'Weekly Test 1 - Plumbing Code.html',
    'Weekly Test 2 - Plumbing Code.html',
    'Weekly Test 3 - Plumbing Code.html',
    'Weekly Test 4 - Plumbing Arithmetic.html',
    'Weekly Test 5 - Plumbing Arithmetic.html',
    'Weekly Test 6 - SPDI.html',
    'manifest.json',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(c => c.addAll(PRECACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    const url = new URL(e.request.url);
    const isOurFile = url.origin === self.location.origin;

    if (isOurFile) {
        /* Our HTML files: cache-first */
        e.respondWith(
            caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
                const clone = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, clone));
                return res;
            }))
        );
    } else {
        /* CDN resources (MathJax etc.): network-first, cache fallback */
        e.respondWith(
            fetch(e.request).then(res => {
                const clone = res.clone();
                caches.open(CACHE).then(c => c.put(e.request, clone));
                return res;
            }).catch(() => caches.match(e.request))
        );
    }
});
