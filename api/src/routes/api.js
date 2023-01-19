const {Router} = require('express')
const router = Router()
const foods = require('./foods.routes')
const customers = require('./customers.routes')
const filters = require ('./filters.routes');

router.use('/foods', foods);
router.use('/login', customers);
router.use('/filters', filters);

module.exports = router
