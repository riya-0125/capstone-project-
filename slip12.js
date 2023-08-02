var express=require('express')
var app=express()
var url="mongodb://127.0.0.1:27017";
var mongodb=require('mongodb')
var MongoClient=mongodb.MongoClient
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

async function connect()
{
    var db= await MongoClient.connect(url)
    return db.db('Teacher')
}
app.get('/',async function(req,res){
    res.sendFile(__dirname+'/slip12q1.html')
})

app.post('/',async function(req,res){
    var num=req.body.tno
    var name=req.body.name
    var subject=req.body.sub
   var dbo= await connect()
   var values={
    tno:num,
    tname:name,
    subject:subject
   }
   var data= await dbo.collection('Tdetail').insertOne(values)
   console.log(data)
   res.send(data)
})
app.listen(3000)
app.get('/find',async function(req,res){
    var dbo=await connect()
    var values={
        subject:'java'
    }
    var data=await dbo.collection('Tdetail').find(values).toArray()
    res.send(data)
})
