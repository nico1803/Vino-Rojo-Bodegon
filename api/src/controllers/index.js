
const Food = require('../models/foods');
const Customer = require('../models/customers');

const getFoods = async () => {
    try {
         return await Food.find().lean();
      } catch (error) {
         console.log(error);
     }     
};   
    
const createFood = async (name, image, type, description, price) => {
    try {
        return await Food.create({name, image, type, description, price})
    } catch (error) {
        console.log(error);
    }
};

const findById = async (id) => {
    return await Food.findById(id);
};

const deleteFood = async (id) => {
    return await Food.findByIdAndDelete(id);
};

const editFood = async (id, name, image, description, price, type) => { // 'image': 'hola' 
    return await Food.findByIdAndUpdate(id, {name, price, description, type, image});
};

const createCustomer = async (name, password, email) => {
    return await Customer.create({name, password, email});
};

const getByType = async (type) => {
    return await Food.find({type: type}).lean();
}

const getCustomers = async () => {
    return await Customer.find().lean();
};

const emailValidation = async (email) => {
    let filter = await Customer.findOne({email: email});
    if(filter.length){
        return true
    };
    return false;
}

module.exports = {getFoods, getCustomers, createFood, findById, deleteFood, editFood, createCustomer, getByType, emailValidation};