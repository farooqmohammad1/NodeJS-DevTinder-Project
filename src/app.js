const express = require('express')
const app= express();

app.use('/',(req,res)=>{
      res.send('Hi hello')
})




app.listen('8080',(req,res)=>{
   console.log("Hi server stared")
})