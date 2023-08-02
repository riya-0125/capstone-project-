const express=require('express')
const app=express()
const mongodb1=require('mongodb')
const mongoclient1=mongodb1.MongoClient
const url="mongodb://127.0.0.1:27017/"

async function connected()
{
    var database=await mongoclient1.connect(url)
    return database.db('company')
}

app.get('/',async function(req,res){
    var dbo=await connected()
    var collection=await dbo.collection('employee').insertMany([{'name':'riya'},{'name':'prathamesh'},{'name':'gauri'},{'name':'saurabh'}])
   console.log(collection)
   res.end("employee data enterd")
}).listen(8000)