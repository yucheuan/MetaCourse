const {default: TestRunner} = require("jest-runner");
const addFive = require(`./javascript-C2`)

test(`returns the number plus 5`, () => {
    expect(addFive(1)).toBe(6);
})