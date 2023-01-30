const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");

//funcion generadora de token que recibe el id del customer
const generatorToken =(user)=>{
  return jwt.sign(user, process.env.SECRET_KEY, {expiresIn: (7 * 24) + "h"})
};

//middleware para comprobar el token:
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({ ok: false, msj: 'Token no proporcionado' });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    req.userId = decoded.id;
    next();
  }
};

module.exports = { generatorToken, verifyToken };




