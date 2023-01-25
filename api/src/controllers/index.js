
const Food = require('../models/foods');
const Drink = require('../models/drinks')
const Customer = require('../models/customers');

const getFoods = async () => {
    try {
         return await Food.find().lean();
      } catch (error) {
         console.log(error);
     }     
};
const getDrinks = async () => {
    try {
         return await Drink.find().lean();
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
const createDrink = async (name, image, type, description, price) => {
    try {
        return await Drink.create({name, image, type, description, price})
    } catch (error) {
        console.log(error);
    }
};

const findById = async (id) => {
    return await Food.findById(id);
};

const findByIdDrink = async (id) => {
    return await Drink.findById(id);
};


const deleteFood = async (id) => {
    return await Food.findByIdAndDelete(id);
};

const deleteDrink = async (id) => {
    return await Drink.findByIdAndDelete(id);
};

const editFood = async (id, name, image, description, price, type) => { // 'image': 'hola' 
    return await Food.findByIdAndUpdate(id, {name, price, description, type, image});
};

const editDrink = async (id, name, image, description, price, type) => { // 'image': 'hola' 
    return await Drink.findByIdAndUpdate(id, {name, price, description, type, image});
};

const createCustomer = async (name, email, password) => {
    
    return await Customer.create({name, password, email});

};

const getByType = async (type) => {
    return await Food.find({type: type}).lean();
}

const getCustomers = async () => {
    return await Customer.find().lean();
};

const emailValidation = async (email) => {
    const filter = await Customer.findOne({email: email});
    if(!filter) {
        return false;
    } else {
        return true;
    }
};

const deleteCustomer = async (id) => {
    return await Customer.findByIdAndDelete(id);
};

const updateCustomer = async (id, name, password, email) => {
    return await Customer.findByIdAndUpdate(id, {name, password, email});
}

module.exports = {getFoods, deleteCustomer, getCustomers, createFood, findById, deleteFood, 
                  editFood, createCustomer, getByType, emailValidation, updateCustomer, createDrink, getDrinks, findByIdDrink, deleteDrink, editDrink};