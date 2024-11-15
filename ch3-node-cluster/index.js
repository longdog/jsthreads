import http from "node:http"
import cluster from "node:cluster"

if (cluster.isPrimary){
  cluster.fork()
  cluster.fork()
  cluster.fork()
  cluster.fork()
} else {
  http.createServer((req,res)=>{
    res.end("hello from " + cluster.worker.id)
  }).listen(4444)
}

