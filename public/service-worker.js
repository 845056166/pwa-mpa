
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
// This tells Workbox that when a request is made,
// it should see if the regular expression matches part of the URL, and if it does,
// do something with that request. For this guide,
// that “do something” is going to be passing the request through one of Workbox’s caching strategies.
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute('https://fonts.googleapis.com/(.*)',
  workbox.strategies.cacheFirst({
    cacheName: 'googleapis',
    cacheExpiration: {
      maxEntries: 20
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workbox.routing.registerRoute(/\.(?:png|gif|jpg)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50
    }
  })
);

var articleHandler = workbox.strategies.NetworkFirst({
  cacheName: 'posts-cache',
  cacheExpiration: {
    maxEntries: 50
  }
});

workbox.routing.registerRoute('/pages/post*.html', args => {
  return articleHandler.handle(args).then(response => {
    if (!response) {
      return caches.match('pages/offline.html');
    } else if (response.status === 404) {
      return caches.match('pages/404.html');
    }
    return response;
  });
});
