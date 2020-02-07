
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
