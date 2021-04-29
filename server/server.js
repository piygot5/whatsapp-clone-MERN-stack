// importing
const express = require('express');
const mongoose = require('mongoose');
const Messages = require('./dbMessages');
const Pusher = require('pusher');
const cors = require('cors');

//import mongoose from 'mongoose';
//import Messages from './dbMessages.js';
//import Pusher from 'pusher';
//import cors from "cors";

// mongo db password 68PSWmFPJIQzNi5R


// app config
const app = express();
const port = process.env.port || 5000

const pusher = new Pusher({
    appId: "1186113",
    key: "2cf60902cdc98d3f75c3",
    secret: "5ea655c68b9ea1f905bb",
    cluster: "ap2",
    useTLS: true
  })

// middleware
app.use(express.json())
app.use(cors());


// DB config
//const connection_url = "mongodb://localhost:27017/whatsappdb";
const connection_url = "mongodb+srv://admin:68PSWmFPJIQzNi5R@cluster0.tytqb.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex:true ,
    useNewUrlParser:true,
    useUnifiedTopology:true
});


// pusher part
const db = mongoose.connection;

db.once("open",()=> {
    console.log("MongoDB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

     changeStream.on("change",(change)=>{
        //console.log("A change occured", change);

        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted",
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            });
        } else {
           // console.log("Error triggering pusher")            
        }
     });
});





// api routes

app.get("/", (req,res) =>{
    res.status(200).send('hello world');
})
app.get('/messages/sync', (req,res) =>{
    Messages.find( (err,data) =>{
        if (err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
    })
})
app.post('/messages/new', (req,res) =>{
    const dbMessage = req.body

    Messages.create(dbMessage , (err,data) =>{
        if (err) {
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data);
        }
    })
})


// listen
app.listen(port, ()=>{
   // console.log(`Listening on localhost:  ${port}`)
})
