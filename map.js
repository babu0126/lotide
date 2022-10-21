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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1,['g','c','t','m','t']);
