const express=require('express');
const db=require("./db/conn")
const app=express();
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hello Shehroz Amjad")
});

app.listen(port,()=>{
    console.log("yes it is Running")
})