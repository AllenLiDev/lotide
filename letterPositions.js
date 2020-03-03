const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) console.log(`🏀🏀🏀Assertion Passed: ${arr1} === ${arr2} `)
  else console.log(`🔕🔕🔕Assertion Failed: ${arr1} !== ${arr2}`);
};

const letterPositions = function (sentence) {
  const results = {};
  let counter = 0;
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(counter);
    } else {
      results[letter] = [counter];
    }
    counter++
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Delta compression using up to 2 threads.").e, [1, 2, 5]);
