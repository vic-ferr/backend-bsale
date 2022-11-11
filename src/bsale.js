// const express = require("express");
// const app = express();
// const morgan = require("morgan");
const mysql = require("mysql");
require("dotenv").config()

//settings
// app.set("port", process.env.PORT || 3000)



// app.use(morgan("dev"));
const conection = mysql.createPool({
    host: process.env.HOST,
    usuario: process.env.USER,
    contarseña: process.env.PASSWORD,
    database: process.env.DB
})


// app.listen(app.get("port"), () => {
//     console.log("hay conexion");
// });
