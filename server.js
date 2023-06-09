const express = require("express");
const app = express();
const port =8000;

app.get("/",(req,res)=>{
    res.send("hellow");
})

app.listen(port,()=>{
    console.log("connected successful");
})