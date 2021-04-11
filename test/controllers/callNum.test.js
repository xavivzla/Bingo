const callNum = require("../../src/controllers/callNum")

describe("Generate random num", () => {
    const maxNum = 75
    const minNum = 1
    const CallNums = []
    const numGenerate = callNum(maxNum, minNum, CallNums)
    CallNums.push(numGenerate)
    it("Should be return a array not empty", () => {
        expect(CallNums).toBeTruthy()
    });
    it("Should be has 75 numbers", () => {
        let iterator = 1
        while (iterator < 75) {
            const numGenerate = callNum(maxNum, minNum, CallNums)
            CallNums.push(numGenerate)
            iterator++
        }
        expect(CallNums).toHaveLength(maxNum)
    });
    it("should be has a single value", () => {
      const isArrayUnique = arr => Array.isArray(arr) && new Set(arr).size === arr.length
      expect(isArrayUnique(CallNums)).toBeTruthy()
  });

});
