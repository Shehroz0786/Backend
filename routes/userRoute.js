const express=require("express");
const router=express.Router();

const user=require("../Models/user");

router.post("/Signup",async(req,res)=>{
    const newuser=new user(req.body);

    try{
        const user=await newuser.save();
        res.send("User Signup Successfully");
    } catch(error){
        return res.status(400).json({ error });
    }
});

router.post("/Login",async(req,res)=>{
    const {email,password}=req.body;

    try{
        const user = await user.findOne({email:email,password:password});
        if(user){
            res.send(user);
        }else{
            return res.status(400).json({message:"Login Failes"});
        }
    }catch(error){
        return res.status(400).json({error});
    }
});

module.exports=router;