const ID = self.crypto.randomUUID()

console.log("shared worker.js", ID)

const ports = new Set()

self.onconnect = event => {
  const port = event.ports[0]
  ports.add(port)
  console.log("CONN", ID, ports.size)

  port.addEventListener("message",event => {
    console.log("MESSAGE", ID, event.data)
    for (const p of ports){
      p.postMessage([ID, event.data])
    }
  })
  port.start()
}