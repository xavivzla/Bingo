const { Router } = require('express')
const bingoRouters = require('./bingo')

const Route = Router()

Route.use('/bingo', bingoRouters)

module.exports = Route