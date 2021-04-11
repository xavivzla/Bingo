const callNum = (max, min, arr) => {
    if (arr.length >= max) return
  
    while (true) {
      const nRand = Math.floor(Math.random() * max) + min
      if (!arr.includes(nRand)) return nRand
    }
  }
  
  module.exports = callNum
  