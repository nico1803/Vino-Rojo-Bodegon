const express = require('express')
const router = require('./routes/api')
const cors = require('cors')
const app = express()
//middlewares
app.use(cors())
app.use(express.json());


app.use(router) // El router es uno solo para todo el proyecto.

module.exports = app

//HellowWorld