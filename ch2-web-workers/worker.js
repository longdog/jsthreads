console.log("worker.js")
self.onmessage = msg => {
  console.log("new message from main", msg.data)
  postMessage("send message by worker")
}
