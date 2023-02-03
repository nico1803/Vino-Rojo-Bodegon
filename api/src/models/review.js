const mongoose = require('mongoose');

const schema = mongoose.Schema({
    
    score: {
        type: 'Number',
        required: true,
    },
    commentary:{
        type:'String',
        require: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});
const Review = mongoose.model('review', schema);
module.exports = Review