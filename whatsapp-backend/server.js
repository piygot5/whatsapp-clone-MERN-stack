// importing
import express from 'express';
import mongoose from 'mongoose';
// mongo db password 68PSWmFPJIQzNi5R
// app config
const app = express();
const port = process.env.port || 8000

// middleware

// DB config

const connection_url = "mongodb+srv://admin:68PSWmFPJIQzNi5R@cluster0.tytqb.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex:true ,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// ???

// api routes

app.get("/", (req,res) =>{
    res.status(200).send('hello world11111');
})


// listen
app.listen(port, ()=>{
    console.log(`Listening on localhost:  ${port}`)
})
