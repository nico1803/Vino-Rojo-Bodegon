const {Router} = require('express')
const helloworld = require('./helloworld')

const router = Router()

router.get('/', helloworld) // El router junta todas las rutas (funciones) de /routes

module.exports = router
