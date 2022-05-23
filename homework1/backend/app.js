const express = require('express');
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.status(200).send("Hello")
})

app.post("/employee", async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'day19', // <== ระบุ database ใหถูกตอง
        port: 3306, // <== ใส port ใหถูกตอง (default 3306, MAMP ใช 8889)
    })
    try {
        const dataUsers = await req.body.data
        const data = await connection.query(`insert into employee (Firstname, Lastname,Phone, Email,Address,Subdistrict ,District,Province,PostalCode,IdCardNumber) value ("${dataUsers.Firstname}","${dataUsers.Lastname}","${dataUsers.Phone}","${dataUsers.Email}","${dataUsers.Address}","${dataUsers.Subdistrict}","${dataUsers.District}","${dataUsers.Province}","${dataUsers.PostalCode}","${dataUsers.IdCardNumber}")`);
        res.json({
            status: "success",
            data: data
        }
        

        );
        
        await connection.end();
    } catch (error) {
        res.status(400)
        res.json(error);
        console.log(error);
    }


})

app.post("/company", async (req, res) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // <== ระบุใหถูกตอง
        password: '1234', // <== ระบุใหถูกตอง
        database: 'day19', // <== ระบุ database ใหถูกตอง
        port: 3306, // <== ใส port ใหถูกตอง (default 3306, MAMP ใช 8889)
    })
    try {
        const dataUsers = await req.body.data
        const data = await connection.query(`insert into company (CompanyName, CompanyAddress,Period, JobTitle,IdCardNumber) value ("${dataUsers.CompanyName}","${dataUsers.CompanyAddress}","${dataUsers.Period}","${dataUsers.JobTitle}","${dataUsers.IdCardNumber}")`);
        res.json({
            status: "success",
            data: data
        }
        

        );
        
        await connection.end();
    } catch (error) {
        res.status(400)
        res.json(error);
        console.log(error);
    }

})

app.listen(3000, () => {
    console.log("Server Start PORT ===> 3000");
})