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
        type: "boolean",
        default: false,
        require: true
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
    },
    image:{
        type:"String"
    }
}); 

const Customer = mongoose.model('customer', schema);
module.exports = Customer