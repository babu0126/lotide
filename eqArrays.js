const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } 
  for(let i = 0; i < array1.length; i ++) {
    if(Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      const result = eqArrays(array1[i], array2[i]);
      if (!result) return false;
    } else {
      if (array1[i] !== array2[i]) return false;
      }
    }
    return true;
  };

  module.exports = eqArrays;
  
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArrays([2,3],[2,4])); // false
// console.log(eqArrays([2,3],[2,3])); // true
// console.log(eqArrays([[2,3],4],[[2,4],5])); // false
// console.log(eqArrays([[2,3],4],[[2,3],4])); // true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArrays([[2, 3], [4,5]], [[2, 3], [4, 5]])); // true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

