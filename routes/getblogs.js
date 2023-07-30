const express=require('express');
const router=express.Router();
const {connection}=require('../databse/sql');

router.get('/',(req,res)=>{
    connection.query('SELECT body from register',(err,result)=>{
        if (err){
            throw err
        }
        else{
            res.send(result);
        }
    })
})
module.exports=router;