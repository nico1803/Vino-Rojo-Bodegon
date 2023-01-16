const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    nombre: {
        type: 'String',
        required: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});
const Empleado = mongoose.model('empleado', schema);

console.log('create employee')
Empleado.create({nombre: "juan"}).then(console.log)

module.exports = Empleado
