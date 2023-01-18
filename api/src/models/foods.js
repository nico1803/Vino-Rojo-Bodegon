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
        type:'Double',
        require:true,
    },
    review:{
        type:'Double',
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
const Food = mongoose.model('food', schema);
module.exports = Food