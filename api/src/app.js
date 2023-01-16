const express = require('express')
const router = require('./routes/api')

const app = express()

app.use(express.json())
app.use(router) // El router es uno solo para todo el proyecto.

module.exports = app
