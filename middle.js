const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) console.log(`🏀🏀🏀Assertion Passed: ${actual} === ${expected} `)
  else console.log(`🔕🔕🔕Assertion Failed: ${actual} !== ${expected}`);
}

const middle = (inputArray) => {
  if (inputArray.length <= 2) {
    return [];
  }
  let even = inputArray.length % 2 ? false : true;
  if (even) {
    return [inputArray[(inputArray.length / 2) - 1], inputArray[inputArray.length / 2]]
  } else {
    return [inputArray[(inputArray.length + 1) / 2] - 1]
  }
}

assertArraysEqual(middle([1]), []) // => true
assertArraysEqual(middle([1, 2]), [1]) // => false
assertArraysEqual(middle([1, 2, 3]), [2]) // => true
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3, 4]) // => false
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => true
