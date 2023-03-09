const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");
const Customer= require("../models/customers")

//funcion generadora de token 
const generatorToken =(user)=>{
  // {expiresIn: (7 * 24) + "h"} --> Ver como manejarlo antes de agregarlo. 
  return jwt.sign({user}, process.env.SECRET_KEY,{expiresIn: (7 * 24) + "h"})
};

//middleware para comprobar el token:
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ ok: false, msj: 'Token no proporcionado' });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded)

    //consulta a la base de datos
    const customer = Customer.findById(decoded.user.id);
    req.userId = decoded.user.id;
    if(!customer){
      return res.status(404).json({ok:false, message:"User not found"})
    }else{
      next();
           
    }   
  }
};

// funcion para comprobacion de admin
// const verifyAdmin = (token) => {
//   const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // ----> {user: user, email: email, admin: true}
//   console.log(decodedToken.user.admin);
// }

module.exports = { generatorToken, verifyToken};




