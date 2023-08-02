const express=require('express')
const url="mongodb://127.0.0.1:27017/"
const app=express()
const bodyparser=require('body-parser')
const mongodb1=require('mongodb')
const MongoClient1=mongodb1.MongoClient
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
async function connected()
{
    var dbo=await MongoClient1.connect(url)
    return dbo.db('login')
}
app.get('/sign',async function(req,res){
    res.sendFile(__dirname+'/signup.html') 
})
app.post('/sign',async function(req,res){
    var object=await connected()
    
        var username=req.body.name
        var email=req.body.mail
        var mob=req.body.mob
        var passw=req.body.pass
    var values={
        'name':username,
        'mail':email,
        'mob':mob,
        'pass':passw
    }
var data=await object.collection('signup').insertOne(values)
console.log(data)
res.send('data enterd')
//login system
app.get('/login',async function(req,res){
    res.sendFile(__dirname+'/login.html')

})
app.post('/login',async function(req,res){
    var db=await connected()
    var usern=req.body.name
    var password=req.body.pass
    var val={
        'username':usern,
        'passw':password
    }
    var daa=await db.collection('login').insertOne(val)
    console.log(daa)
    res.end('logged in')
})

}).listen(4090)