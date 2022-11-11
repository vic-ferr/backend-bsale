const express = require("express");
const app = express();
const cors = require("cors")
// const morgan = require("morgan");
const mysql = require("mysql");
require("dotenv").config()

const PORT = process.env.PORT || 3600

app.use(express.json())
app.use(cors())



// app.use(morgan("dev"));
mysql.createPool({
    host: process.env.HOST,
    usuario: process.env.USER,
    contarseña: process.env.PASSWORD,
    database: process.env.DB
})

app.listen(PORT, () => console.log(`hay conexion en puerto${PORT}`));

// app.listen(app.get("port"), () => {
//     console.log("hay conexion");
// });
