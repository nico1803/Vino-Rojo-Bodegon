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
    admin: {
        default: false
    },
    cart: {
        type: 'Array' // [{id, name, image, price, 3}, {}]
    },
    numberCart: {
        type: 'Number' // 2
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
}); 

const Customer = mongoose.model('customer', schema);
module.exports = Customer