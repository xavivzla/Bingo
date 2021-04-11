const BINGO = ["B", "I", "N", "G", "O"]
const ITERABLE = 15
const DEFAULT_QUANTITY = 5

const generateGirdCard = () => {
  const card = []
  let prevPivot = 1
  for (let i = 1; i <= BINGO.length; i++) {
    const temp = []
    const minNumIterable = i * ITERABLE
    for (let j = prevPivot; j <= minNumIterable; j++) {
      temp.push(j)
      if (j === minNumIterable) {
        prevPivot = minNumIterable + 1
      }
    }
    card.push(temp)
  }
  return card
}

const generateCard = (quantity = DEFAULT_QUANTITY) => {
  const card = generateGirdCard()
  return card
    .map((col) => col.sort(() => Math.random() - 0.5).slice(0, quantity))
    .map((col, index) => {
      if (index === 2) {
        return col.map((col, index) => (index === 2 ? "FREE" : col))
      }
      return col
    })
}

module.exports = { generateCard }
