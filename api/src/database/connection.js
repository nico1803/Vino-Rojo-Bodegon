const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGO;///uri de mongo///

/////conexion a mongoose/////
const connection = mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - Conectado a MongoDB');
});
mongoose.connection.on('error',(error)=>{
    console.log('[Mongoose]-Error:',error);
});
module.exports = connection;
