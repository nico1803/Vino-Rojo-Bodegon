const jwt = require("jsonwebtoken");
const dotenv=require("dotenv");

//funcion generadora de token que recibe el id del customer
const generatorToken =(user)=>{
  return jwt.sign({user}, process.env.SECRET_KEY, {expiresIn: (7 * 24) + "h"})
};

//middleware para comprobar el token:
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ status: false, msj: 'Token no proporcionado, no tienes acceso a esta información' });
  } else {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decoded.id;
    next();
  }
};

// funcion para comprobacion de admin
// const verifyAdmin = (token) => {
//   const decodedToken = jwt.verify(token, process.env.SECRET_KEY); // ----> {user: user, email: email, admin: true}
//   console.log(decodedToken.user.admin);
// }

module.exports = { generatorToken, verifyToken};




