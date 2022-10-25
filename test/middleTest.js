const middle = require("../middle");
const assert = require('chai').assert;

describe("#head", () => {
  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });
  it("returns [5] for [0,3,4,5,6,7,8]", () => {
    assert.deepEqual(middle([0,3,4,5,6,7,8]), [5]);
  });
  it(`returns ['sam'] for ['david', 'sam', 'andy']`, () => {
    assert.deepEqual(middle(['david','sam','andy']),['sam']);
  });
});



// TEST CODE 1
// const testCode1 = [1,2,3,4,5,6];
// const testCode2 = [0,3,4,5,6,7,8];
// const testCode3 = ['david', 'sam', 'andy'];
// assertArraysEqual(middle(testCode1), [3,4]); // true
// assertArraysEqual(middle(testCode2), [5]); // true
// assertArraysEqual(middle(testCode3), ['sam']); // true

