const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Arrays Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Arrays Failed: ${actual} !==  ${expected}`);
  }
};

const counterLetters = function(string) {
  let results = {};
  for (const value of string) {
    if (!results[value]) results[value] = 1;
    else results[value] += 1;
  }
  console.log(results);
  return results;
};

const test = counterLetters('nnoott');
assertEqual(test['t'], 1);
