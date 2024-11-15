let counter = 0

self.oninstall = event => {
  console.log("install service worker")
}

self.onactivate = event => {
  console.log("activate service worker")
  event.waitUntil(self.clients.claim())
}
self.onfetch = event => {
  console.log("fetch", event.request.url)
  if (event.request.url.endsWith("/data.json")){
    counter++
    event.respondWith(
      new Response(JSON.stringify({counter}),{
        headers:{"Content-Type":"application/json"}})
    )
    return 
  }
  event.respondWith(fetch(event.request))
}