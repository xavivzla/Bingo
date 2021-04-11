const arrFlat = require('../utils/arrFlat')
const cleanCard = require('../utils/cleanCard')

const verifyCard = (arr, card) => {
    const flatCard = cleanCard(arrFlat(card))
    if(!flatCard.length)
      return {
        mensaje: "no existe el carton"
      }
    for (let i = 0; i < flatCard.length; i++) {
      if (!arr.includes(flatCard[i]) && flatCard.length)
        return { mensaje: "No es ganador", status: false }
    }
    return {
      mensaje: "Si es ganador",
      status: true,
      logs: {
        card,
        callNums: arr
      }
    }
  }
  
  module.exports = verifyCard
  