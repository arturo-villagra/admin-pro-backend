const { dbConnection }=require('./database/config');
const express =require('express');
const cors = require('cors');
//Crear servidor express
const app= express();

app.use( (cors ));


require('dotenv').config();

dbConnection();
//main_user
//nr814gbcq0ey8Fjp

//Rutas
app.get( '/', (req, res)=>{

    res.json({
        ok:true,
        msg:'Hola Mundo'
    })
});


app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en puerto'+process.env.PORT);
});