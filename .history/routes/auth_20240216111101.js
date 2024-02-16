const express=require('express');
const passport=require('passport')
const LocalStrategy =require
const router =express.Router();

router.get('/login',(req,res,next)=>{
    res.render('login')
})

module.exports=router;
