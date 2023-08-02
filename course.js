const express=require('express')
const app=express()
//app.use(express.urlencoded({extended:true}))
app.get('/',function(req,res){
    res.sendFile(__dirname+'/s.html')})
app.listen(3000)