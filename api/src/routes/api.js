const {Router} = require('express')
const router = Router()
const foods = require('./foods.routes')
const drinks = require('./drinks.routes.js')
const customers = require('./customers.routes')
const filters = require ('./filters.routes');
const email = require("./email.routes")




router.use('/foods', foods);
router.use('/drinks', drinks);
router.use('/login', customers);
router.use('/filters', filters);
router.use("/email", email);

 
module.exports = router
