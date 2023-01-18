const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    name: {
        type: 'String',
        required: true,
    },
    password:{
        type:'String',
        require: true,
    },
    email:{
        type:'String',
        require:true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});
const Admin = mongoose.model('admin', schema);

/*  console.log('create employee')
Empleado.create({nombre: "juan"}).then(console.log) */
 
module.exports = Admin;
