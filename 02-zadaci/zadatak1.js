import express from "express";

import bodyParser from "body-parser";
import connect from "./db.js";
import mongo from "mongodb";
import db from "./db.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/saveItem", async (req, res)=>{
    let db= await connect();
    let data = req.body;
    let result = await db.collection("artikl").insertOne(data,{$set:data});
    if(result.insertedId){
        res.json({"status":"OK","message":`Item saved ${data.name} in DB`});
    }else{
        res.json({"status":"Failed"});
    }
})

app.get("/getBrand", async (req,res)=>{
    var data=req.query;
    console.log(data.brand);
    let db = await connect();
    let result = await db.collection ("artikl").findOne(
        {brand:data.brand},
    )
    if(result){
        res.json({"status":"OK", "data":result});
    }else{
        res.json({"status":"Failed","message":`Brand ${data.brand} not found in DB`});
    }
   
})

app.get("/getItemById", async (req,res)=>{
    var data=req.query;
    let db = await connect();
    console.log(data.id);
    let doc = await db.collection("artikl").findOne({ _id: mongo.ObjectId(data.id)});
    if(doc){
        res.json({"status":"OK", "item":doc});
    }else{
        res.json({"status":"Failed"});
    }
})

app.patch("/updateItemPrice", async (req,res)=>{
    var data = req.query;
    let db = await connect();
    let result = await db.collection ("artikl").updateOne(
        { price : req.body},
        {$set:data},
    )
    
    if(result){
        res.json({"status":"OK", "data":result});
    }else{
        res.json({"status":"Failed"});
    }
})

app.listen(port, () => console.log(`Works on ${port}`));