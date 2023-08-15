const express = require('express');
const app = express();

const boduparser = require("body-parser");

app.use(express.json());
const studentRoutes = require("./src/student/routes")

const port = 8000;
const host = '127.0.0.1'; // Incorrect hostname


// app.use(boduparser.apply)
app.use("/student/",studentRoutes)
// app.get("/",(req,res)=>{
//      res.status(200).json("hello word");
//     // res.send("hello world");
// })

app.listen(port, host, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log("Server is listening on", host + ":" + port);
    }
});
