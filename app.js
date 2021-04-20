const express = require('express');
const app = express();
const port = 9800;
const mongo= require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoUrl = 'mongodb://127.0.0.1:27017'
let db;


app.get('/',(req,res)=>{
    res.send('hello from express')
});


app.get('/location',(req,res)=>{
    db.collection('location').find().toArray((err,result)=>{
        res.send (result)
    })
});

app.get('/rest/:id',(req,res)=>{
    let{id} = req.params;
    db.collection('restaurant').find({_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
});

MongoClient.connect(mongoUrl,(err,connection)=>{
    if(err) console.log(error)
    db = connection.db('edu_mar_intern')
})
app.listen(port,()=>{
    console.log(`server running on port no:${port}`)
});


