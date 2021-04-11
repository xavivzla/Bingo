const arrFlat = require('../utils/arrFlat')
const cleanCard = require('../utils/cleanCard')
const verifyCard = require('./verifyCard')

const verifyAllCards = (arr, cards) => {
    const arrCardFormat = cards.map(item => cleanCard(arrFlat(item.card)))

    return arrCardFormat.map((card, index) => {
        const result = verifyCard(arr, card)

        return ({
            cardId: index + 1,
            ...result
        })
    })
}
  
  module.exports = verifyAllCards
  