const { dbConnection }=require('./database/config');
const express =require('express');
const cors = require('cors');

//Crear servidor express
const app= express();

//configurar CORS
app.use( cors ());

//Lectura y parseo 
app.use(express.json());



require('dotenv').config();

dbConnection();
//main_user
//nr814gbcq0ey8Fjp

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));


app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en puerto'+process.env.PORT);
});