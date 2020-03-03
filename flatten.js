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

const flatten = (inputArray) => {
  let flatArray = [];
  for (const element of inputArray) {
    if (Array.isArray(element)) {
      for (const subElement of element) {
        flatArray.push(subElement);
      }
    } else {
      flatArray.push(element);
    }
  }
  return (flatArray);
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => true
assertArraysEqual(flatten([1, 2, [3, 4, 5], 5, [6]]), [1, 3, 4, 5, 6]); // => false
