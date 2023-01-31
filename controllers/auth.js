const { response } = require("express");
const Usuario=require('../models/usuario');
const bcrypt= require('bcryptjs');
const { generarJWT } = require("../helpers/jwt");


const login = async(req, res=response)=>{

    const {email,password}=req.body;

 try {
        const usuarioDB=await Usuario.findOne({email})

        //VERIFICAR EMAIL
        if(!usuarioDB){
            return res.status(404).json({
                ok:false,
                msh:'EMAIL NO EXISTE'
            })
        }

        //VERIFICAR CONTRASEÑA
        const validPass =bcrypt.compareSync(password, usuarioDB.password);
        if(!validPass){
            return res.status(404).json({
                ok:false,
                msh:'PASSWORD INCORRECTO'
            })
        }

        //GENERAR EL TOKEN 
        const token=await generarJWT(usuarioDB.id);



        res.json({
            ok:true,
           token
        })

    
 } catch (error) {
    console.log(error);
    res.status(500).json({
        ok:false,
        msh:'Error inesperado, revisar Logs!'
    })
 }
}


module.exports={
    login
}