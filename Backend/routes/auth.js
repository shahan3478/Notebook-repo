const express=require('express');
const User=require('../models/User');
const router=express.Router();
const bcrypt=require('bcryptjs')
const { body, validationResult } = require('express-validator');
var jwt=require('jsonwebtoken')
const Fetchuser=require("./Middleware/Fetchuser")

JWT_SECRET="Shahanisagood@boy"

// ROUTE 1: Create a user using:POST "/auth/createuser".Does not require login
router.post('/createuser',[
    body('email').isEmail(),
    body('password').isLength({ min: 3 }),
    body('name').isLength({ min: 3 }),
],async(req,res)=>{
    
    //if there is error ,return bad request and the error
const error =validationResult(req);
if (!error.isEmpty()){
    return res.status(400).json({errors:error.array()});
}
//Check whetehr the user exist already with this email
try{
let user=await User.findOne({email:req.body.email});
if(user){
    return  res.status(400).json({error:"Sorry a user with this email already exist"});
}
const salt=await bcrypt.genSalt(10);
const secPass=await bcrypt.hash(req.body.password,salt)
 user=await User.create({
    name:req.body.name,
    password:secPass,
    email:req.body.email,

})
const data={
    user:{
        id:user.id
    }
}
const authToken=jwt.sign(data,JWT_SECRET)

// .then(user=>res.json(user))
//  .catch(error=>{
//          console.log(error)

//     res.json({error:'Please enter a unique value for email',message:err.message})
res.json(authToken)
}catch(error){
    console.error(error.message)
    res.status(500).send

}
})
// Route 2: Authenticate a user using POST "/api/auth/login".No login required
router.post('/Login',[
    body('email').isEmail(),
    body('password','Password cannot be blank').exists(),

],async(req,res)=>{
    let success=false;
    const error =validationResult(req);
if (!error.isEmpty()){
    return res.status(400).json({errors:error.array()});
}
const {email,password}=req.body;
try{
    let user=await User.findOne({email});
    if(!user){
        success=false;
        return res.status(400).json({error:"Please try to login with correct creden"});
    }
    const passwordCompare=await bcrypt.compare(password,user.password);
    if(!passwordCompare){
        success=false;
        return res.status(400).json({success,error:"Please try to login with correct credentials"});
    }
    const data={
    user:{
        id:user.id
    }
}
const authToken=jwt.sign(data,JWT_SECRET)
success=true;
res.json({success,authToken})
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error")

}
})
// Route 3: Get a logged in user details using POST "/api/auth/login". login required
router.post('/getuser',Fetchuser,async(req,res)=>{
try{
    userId=req.user.id;
    const user=await User.findById(userId).select("-password")
    res.send(user)

}catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error")
}
})
module.exports=router