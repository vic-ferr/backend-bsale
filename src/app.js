// import mysql from "mysql";
// import dotenv from "dotenv";
const mysql = require("mysql")
require("dotenv").config()
const conector = mysql.createPool({
    host: process.env.HOSTDATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
})
module.exports = conector;