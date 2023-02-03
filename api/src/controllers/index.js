
const Food = require('../models/foods');
const Drink = require('../models/drinks')
const Customer = require('../models/customers');
const Review = require('../models/review')
const bcrypt = require ('bcryptjs');

const getFoods = async () => {
    try {
         return await Food.find().lean();
      } catch (error) {
         console.log(error);
     }     
};

const getAbleFoods = async () => {
    try {
         return await Food.find({available: true}).lean();
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

const getReview = async () => {
    try {
         return await Review.find().lean();
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

const createReview = async (score, commentary) => {
    try {
        return await Review.create({score, commentary})
    } catch (error) {
        console.log(error);
    }
};

const findById = async (id) => {
    return await Food.findById(id);
};

const findUserById = async (id) => {
    return await Customer.findById(id);
};

const findByIdDrink = async (id) => {
    return await Drink.findById(id);
};

const findByIdReview = async (id) => {
    return await Review.findById(id);
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

const createCustomer = async (name, email, hashedPassword) => {
    const password = bcrypt.hashSync(hashedPassword, bcrypt.genSaltSync(10));
    return await Customer.create({name, password, email});
};

//encontrar el cliente por el email
const findCustomerByEmail = async(email)=>{
    return await Customer.findOne({email:email})
}

const getByType = async (type) => {
    return await Food.find({type: type}).lean();
}
//traer bebidas x type
const getDrinkByType = async (type) => {
    return await Drink.find({type: type}).lean();
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
// const userValidation = async (username) => {
//     const filter1 = await Customer.findOne({name: username});
//     if(!filter1) {
//         return false;
//     } else {
//         return true;
//     }
// }; 
const deleteCustomer = async (id) => {
    return await Customer.findByIdAndDelete(id);
};

const updateCustomer = async (id, name, password, email) => {
    return await Customer.findByIdAndUpdate(id, {name, password, email});
}

const updateCart = async (id, cart, numberCart) => {
    return await Customer.findByIdAndUpdate(id, {cart: [cart]})
}; 
// [{}, {}, {}]
//  {$push: {cart: {$each: cart}}}

const disableFood = async (id) => {
    return await Food.findByIdAndUpdate(id, {available: false});
};

const ableFood = async (id) => {
    return await Food.findByIdAndUpdate(id, {available: true});
};



module.exports = {getFoods, findUserById, getAbleFoods, disableFood, ableFood, updateCart, deleteCustomer, getCustomers, createFood, findById, deleteFood, 
                  editFood, createCustomer, getByType, emailValidation, updateCustomer, createDrink, getDrinks, findByIdDrink, deleteDrink, editDrink,getDrinkByType, findCustomerByEmail,getReview, createReview, findByIdReview };