var express=require('express')
var app=express()
var url="mongodb://127.0.0.1:27017/"
var mongodb=require('mongodb')
var MongoClient=mongodb.MongoClient

async function connectd()
{
    var db=  await MongoClient.connect(url)
    return db.db('login')
    
}
app.get('/insert',async function(req,res)
{
    var dbo=await connectd()//databse connection obj
    var values={
        'name':'riya',
        'rollno':'07'
    }
    var data = await dbo.collection('user').insertOne(values)
    console.log(data)
    res.send("Data inserted Successfully")
})
/*app.get('/drop',async function(req,res)
{
    var dbo =  await connect()
    var values={'name':'gaurii'}
    var data= await dbo.collection('user').deleteOne(values)
    console.log(data)
    res.send("Data Dleted")
})*/
app.listen(4000)
