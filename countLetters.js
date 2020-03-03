const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🏀🏀🏀Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔕🔕🔕Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

// The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
const countLetters = (sentence) => {
  let results = {};
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] = results[letter] + 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters('Delta compression using up to 2 threads.')

assertEqual(result1['e'], 3);
assertEqual(result1['1'], undefined);
assertEqual(result1['d'], 1);
