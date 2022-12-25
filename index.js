import express from 'express';
import path from 'path';
const PORT = '8082';
const HOST='0.0.0.0';
const app=express();

app.get('/',(req,res)=>{
    console.log("enter inside!!!!!")
    res.send("main page of webiste");
})


app.listen(PORT, HOST, ()=>{
    console.log(`listen on host ${HOST}:${PORT}`);
});

