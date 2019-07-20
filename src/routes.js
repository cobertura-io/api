const express = require('express')
const routes = express.Router()

const GendersController = require('./controllers/GendersController')


routes.get('/genders', GendersController.all)
routes.post('/genders', GendersController.create)
routes.get('/genders/:id', GendersController.getById)
routes.delete('/genders/:id', GendersController.deleteById)

module.exports = routes