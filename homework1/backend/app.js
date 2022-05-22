const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

app.get("/", async (req,res)=>{
    res.status(200).send("Hello")
})

app.listen(3000, ()=>{
    console.log("Server Start PORT ===> 3000");
})