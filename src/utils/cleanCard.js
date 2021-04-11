const cleanCard = (arr) => {
    const index = arr.indexOf("FREE")
    arr.splice(index, 1)
    return arr
}

module.exports = cleanCard