
const Food = require('../models/foods');

// class foodController { // foodContoller.findAll
//     constructor(){}

//     async findAll() {
//         try {
//             return await Food.find().lean();
//         } catch (error) {
//             throw error;
//         }
//     };   

// };

const getFoods = async () => {
    try {
         return await Food.find().lean();
      } catch (error) {
         console.log(error);;
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
}

const editFood = async (id, name, price, description, type, image) => {
    return await Food.findByIdAndUpdate(id, {name, price, description, type, image});
}

module.exports = {getFoods, createFood, findById, deleteFood, editFood};