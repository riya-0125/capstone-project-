const express=require('express')
const app=express()
const url="mongodb://127.0.0.1:27017/"
const mdb=require('mongodb')
const MongoClient=mdb.MongoClient

async function connect()
{
    var db=await MongoClient.connect(url)
    return db.db('movie')
}
app.get('/',async function(req,res){
    var dbo=await connect()
    var value1={
        'actor':'zendya',
        'born_in':'california'}
    var value2={
        'actor':'priyanka chopra',
        'born_in':'india'
    }
    var value3={
        'actor':'jenna ortega',
        'born_in':'california'
    }
    var value4={
        'actor':'kartik aryan',
        'born_in':'india'
    }
    var data=await dbo.collection('actor').insertMany([value1,value2,value3,value4])
    console.log(data)
    res.send("birthplace entered")
})
app.get('/find',async function(req,res){
    var dbo=await connect()
    //for finding many
    var find=await dbo.collection('actor').find({'born_in':'california'}).toArray()
    //for finding one
    var find=await dbo.collection('actor').findOne({'born_in':'california'})
    console.log(find)
    res.send(find)


}).listen(9000)