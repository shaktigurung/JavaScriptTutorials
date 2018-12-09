const { add } = require("./app");
const assert = require("assert");


console.log("First test: add(1,5) is equal to 6");
const actual = add(1,5);
const expectation = 6;
assert.equal(actual, expectation);
console.log("First test: ran successfully");

console.log("Second test: add() with 1 argument throws an error");
assert.throws(()=>{
    add(1);
});
console.log("Second test: ran successfully");

console.log("All test ran successfully");