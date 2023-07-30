const express = require('express');
const router = express.Router();
const multer = require('multer');
const {connection}=require('../databse/sql')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

var upload = multer({ storage });

router.post('/', upload.single("file"), (req,res,next) => {
    const data=req.query.text;
    console.log("DATA: ",data);
    const storedata={
        body:data,
    }  
    connection.query('INSERT into register SET ?',storedata,(err,result)=>{
        if (err) {
            throw err
        }
        else{
            console.log("Data Stored");
            res.redirect('http://localhost:3000/')
        }
    })
});

module.exports = router;
