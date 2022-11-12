// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv"
// import { conection } from "./app,js"
// import { morgan } from "morgan"
const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config();
const morgan = require("morgan");
const conector = require("./app");
const HOST = "0.0.0.0";
// path = require("path");
// console.log(cors)

const PORT = process.env.PORT || 3600;


app.use(express.json());
app.use(cors());

app.use(morgan("dev"));


app.listen(PORT, HOST, () => console.log(`hay conexion en puerto${PORT}`));
app.get(`/product`, (req, res) => {
    const sql = "SELECT * FROM product";
    conector.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send("sin resultados");
        }
    });
});



// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "index.html"))
// })