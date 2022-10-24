const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqObjects = (object1, object2) => {
  if (object1 === object2) return true;
  if (typeof object1 !== 'object' && typeof object2 !== 'object') return object1 === object2;
  if (object1 === null || object1 === undefined || object2 === null || object2 === undefined) return false;
  let key1Array = Object.keys(object1);
  if (key1Array.length !== Object.keys(object2).length) return false;
  return key1Array.every(k => eqObjects(object1[k], object2[k]));
};


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) );// => false

// Test Cases:
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab,ba),true);
// assertEqual(eqObjects(ab,abc),true);