const assertArraysEqual = function(actual, expected) {
  let result = true;
  if (actual.length !== expected.length) return false;

  for(let i = 0; i < actual.length; i ++) {
    if (actual[i] === expected[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  if (result) {
    console.log(`✅✅✅ Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};

module.exports = assertArraysEqual;