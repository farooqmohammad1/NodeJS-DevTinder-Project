const express = require('express')
const app= express();

// app.use("/",(req,res)=>{
//     console.log(req.params)
//       res.send('Hi hello')
// })
app.use("/hello/:id",(req,res)=>{
   console.log(req.params)
   res.send("This is hello router")
})
app.use("/test/:id/:name",(req,res)=>{
   console.log(req.params)
   res.send("This is tests router")
})
app.post("/post",(req,res)=>{
   res.send("Post req is done")
})





app.listen('8080',()=>{
   console.log("Hi server stared")
})