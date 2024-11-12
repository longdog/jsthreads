console.log("main.js")
const worker = new Worker("worker.js")
worker.onmessage = msg => {
  console.log("new message from worker", msg.data)
}
worker.postMessage("send message to worker")
console.log("end of main.js")
