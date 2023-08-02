const express=require('express')
const app=express()
const mongodb=require('mongodb')
const url="mongodb://127.0.0.1:27017/"
const MongoClient =mongodb.MongoClient
//connection for database CREATE
 async function connection()
  {
    var datab=await MongoClient.connect(url)
    return datab.db('movie')
  }
// insertion 
  app.get('/', async function(req,res){
    var db=await connection()
    var value={'film':'baby'}
    //var values={'actor':'akshay kumar'}
    //var data=await db.collection('film').insertOne(value)
    //var dat=await db.collection('actor').insertOne(values)
    var data=await db.collection('film').insertMany([{'film':'ved'},{'film':'judwa2'},{'film':'abcd2'}])
    var dat=await db.collection('actor').insertMany([{'actor':'ritesh deshmukh'},{'actor':'varun dhawan'},{'actor':'shraddha kapoor'}])
   
    console.log(data)
    console.log(dat)
    res.end('eneterd')

  }).listen(4000)

    