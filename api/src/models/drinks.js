const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    name: {
        type: 'String',
        required: true,
    },
    image:{
        type:'String',
        require: true,
    },
    description:{
        type:'String',
        require:true,
    },
    price:{
        type:'Number',
        require:true,
    },
    review:{
        type:'Number',
        require:false,
    },
    type:{
         type:'String',
        require: true, 
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});
const Drink = mongoose.model('drink', schema);
module.exports = Drink