const {Router} = require('express')
const router = Router()
const foods = require('./foods.routes')

router.use('/foods', foods)

module.exports = router
