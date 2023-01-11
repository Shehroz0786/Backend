const express=require('express');
const db=require("./db/conn");
const app=express();
const userRoute=require('./routes/userRoute')


app.use(express.json())

app.use('/api/user',userRoute)


const port=process.env.PORT || 5000;


// app.get("/",(req, res)=>{
//     res.send("Hello Shehroz Amjad")
// });

app.listen(port,()=>{
    console.log("yes it is Running")
})