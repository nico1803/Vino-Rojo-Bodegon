const {Router} = require('express')
const helloworld = require('./helloworld')
const food = require ('./foods')
const router = Router()

router.get('/', food) // El router junta todas las rutas (funciones) de /routes
router.get('/hello', helloworld) // El router junta todas las rutas (funciones) de /routes

module.exports = router
