import http from "node:http"

import bodyToJson from "./bodyToJson.js"
import { routes } from "./routes.js"
const host = "localhost"
const port = 3333

const server = http.createServer(async(req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")


   const {method, url} = req

   await bodyToJson(req, res)
   const route = routes.find((route)=>{
    return route.method === method && route.path === url
   })
   if(route){
    return route.handler(req, res) 
   }
   return res.writeHead(404).end(JSON.stringify({
    error:"Resource not found"
   }))
})

server.listen(3333)