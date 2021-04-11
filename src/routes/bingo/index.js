const { Router } = require('express')
const { generateCard } = require('../../controllers/generateCard')
const callNum = require('../../controllers/callNum')
const verifyCard = require('../../controllers/verifyCard')
const verifyAllCards = require('../../controllers/verifyAllCards')

const Route = Router()

let idGenerator = 0
const bingoCards = []
const bingoCallNums = []
const maxNum = 75
const minNum = 1

Route.get("/card", (req, res) => {
    try {
        const card = generateCard()
        idGenerator += 1
        const bingoGenerate = {
            card,
            cardId: idGenerator
        }
        bingoCards.push(bingoGenerate)
        res.json({
            data: bingoGenerate
        })
    } catch (e) {
        res.json({
        error: e
        })
    }
})
  
Route.get("/generateNum", (req, res) => {
    try {
        const numGenerate = callNum(maxNum, minNum, bingoCallNums)
        if (numGenerate)
            bingoCallNums.push(numGenerate)
        if(!numGenerate && bingoCallNums.length === 75) {
            const result = verifyAllCards(bingoCallNums, bingoCards)
            res.json(result)
        } else {
            res.json({
              data: {
                numGenerate,
                history: bingoCallNums
              }
            })
        }

    } catch (e) {
        res.json({
            error: e
        })
    }
})
  
Route.post("/checking", (req, res) => {
    try {
        const { body: { cardId } = {} } = req
        const { card = [] } = bingoCards.find((card) => card.cardId === cardId) || {}
        const result = verifyCard(bingoCallNums, card)
        res.json({
            data: result
        })
    } catch (e) {
        res.json({
            error: e
        })
    }
})

Route.get("/checkings", (req, res) => {
    try {
        const result = verifyAllCards(bingoCallNums, bingoCards)
        res.json({
            data: result
        })
    } catch (e) {
        res.json({
            error: e
        })
    }
})

module.exports = Route
  