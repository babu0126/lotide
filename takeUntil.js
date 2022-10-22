const takeUntil = function(array, callback) {
  // Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
  let output = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    } else {
      output.push(element);
    }
  }
  return output;
};
  
// return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

/*
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/