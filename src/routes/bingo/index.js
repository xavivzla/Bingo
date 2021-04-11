const { Router } = require('express')

const Route = Router()

Route.get("/card", (req, res) => {
    res.send("ok")
})
  
Route.get("/generateNum", (req, res) => {
    res.send("ok")
})
  
Route.post("/checking", (req, res) => {
    res.send("ok")
})

module.exports = Route
  