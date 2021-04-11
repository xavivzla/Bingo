const { generateCard } = require("../../src/controllers/generateCard")
const LENGTHROWS = 5
const LENGTHCOLS = 5

describe("Generate bingo card", () => {
  const bingoCard = generateCard()
  it("Should be return a array not empty", () => {
    expect(bingoCard).toBeTruthy()
  });
  it("Should be has five childerns", () => {
    expect(bingoCard).toHaveLength(LENGTHCOLS)
  });
  it("Sholud be has five numbers by row", () => {
    bingoCard.map((row) => expect(row).toHaveLength(LENGTHROWS))
  });
  it("Should be a FREE text in column 3, row 3", () => {
    const middleCol = bingoCard[2]
    const middleRow = middleCol[2]
    expect(middleRow).toEqual("FREE")
  });
});
