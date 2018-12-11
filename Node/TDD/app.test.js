const { add ,subtract } = require("./app");
//const assert = require("assert");


//Normal NODE testing
// console.log("First test: add(1,5) is equal to 6");
// const actual = add(1,5);
// const expectation = 6;
// assert.equal(actual, expectation);
// console.log("First test: ran successfully");
// console.log("Second test: add() with 1 argument throws an error");
// assert.throws(()=>{
//     add(1);
// });
// console.log("Second test: ran successfully");

//Testing with JEST

describe("add()", ()=>{

    test("add(1,5) is equal to 6", ()=>{
        const actual = add(1,5);
        const expectation = 6;
        //assert.equal(actual, expectation);
        //Jest assert
        expect(actual).toBe(expectation);
    });
    test( "add() with 1 argument throws an error", ()=>{
        // assert.throws(()=>{
        //         add(1);
        //     });
        expect(()=>add(1)).toThrow(); //Jest assert
    });
});

describe("subtract()", ()=>{

    test("subtract(6,7) is equal to -1", ()=>{
        const actual = subtract(6,7);
        const expectation = -1;
        expect(actual).toBe(expectation);
    });

    test( "subtract() with 1 argument throws an error", ()=>{
        expect(()=>subtract(1)).toThrow(); //Jest assert
    });
});

console.log("All test ran successfully");