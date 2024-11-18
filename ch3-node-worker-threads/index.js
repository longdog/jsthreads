import {
  Worker,
  isMainThread,
  parentPort
} from "node:worker_threads"

if (isMainThread){
  const worker = new Worker(import.meta.filename)
  worker.on("message", msg=>{
    worker.postMessage(msg)
  })
} else {
  parentPort.on("message", msg => {
    console.log("message from main thread", msg)
  })
  parentPort.postMessage("hello")
}