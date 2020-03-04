const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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
}

assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']); // => should PASS
assertArraysEqual(map(words, (word) => word[1]), ['r', 'o', 'o', 'a', 'o']); // => should PASS
assertArraysEqual(map(words, (word) => word[5]), ['n', 'r', 'r']); // => should fail
