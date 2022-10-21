const eqObjects = function(object1, object2) {
  for (const value in object1) {
    if (Object.prototype.hasOwnProperty.call(object1, value)) {
      if (object1[value] !== object2[value]) return false;
    }
  }
  for (const value in object2) {
    if (Object.prototype.hasOwnProperty.call(object2, value)) {
      if (object2[value] !== object1[value]) return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
// Test Cases:
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);
