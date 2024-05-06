var express= require("express")
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
const multer = require('multer');
const uploadRouter=require('./routes/upload')
// import express from "express"
// import mongoose from "mongoose"
// import bodyParser from "body-parser"


var app=express()
app.use(bodyParser.json())

app.use('/upload', uploadRouter);

var port=6000

var mongodb=()=>{
mongoose.connect('mongodb://127.0.0.1:27017/fsUpload').then((res)=>{
    console.log('database connected')
}).catch((err)=>{
    console.log(err)

})
}



    

app.listen(port,()=>{
    console.log
("app is running ")
mongodb()
})
  
