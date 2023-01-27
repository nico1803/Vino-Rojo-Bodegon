const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");



const secret_key='52153aa1f5a28e095e9d512e7f3bc34ad3d073fc74851aa88e71754b2ad35c2c72f69a383b8f5e3180cc507c3dfe5b1e1db1f8c0a26068e78aedb1ca1c8143cb' 

//funcion generadora de token que recibe el id del customer
const generatorToken =(id)=>{
    return jwt.sign({id}, secret_key, {expiresIn:"1h"})
};

//middleware para comprobar el token:
const verifyToken=(req,res,next)=>{
   const token=req.headers["x-access-token"];
   
   if(!token){
    return res.status(401).json({ ok: false, msj: 'Token no proporcionado' });
   }else{
    const decoded = jwt.verify(token, secret_key);
     console.log(decoded);
     req.userId= decoded.id;
     next();
   }
};


module.exports = {generatorToken, verifyToken};




