//importamos express 
const express = require('express');
//declaramos la app express
const app = express();
app.use(express.json());

//importamos dotenv
require('dotenv').config();

//importamos mongoose
const mongoose = require('mongoose');

//importamos cors
const cors = require('cors');
//usamos cors 
app.use(cors());

//importamos la coneccion a la base de datos 
const db = require('./db/connectMDB');

db

//iportamos las rutas
const routes = require('./router');

//usamos las rutas
app.use('/',routes());



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

