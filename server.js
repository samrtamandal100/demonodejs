const express = require("express");
const os = require('os');
const app = express();
const port =8000;

app.get("/",(req,res)=>{
    res.send(os.platform());
})

app.listen(port,()=>{
    console.log("connected successful");
})
