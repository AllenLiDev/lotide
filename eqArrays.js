const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🏀🏀🏀Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔕🔕🔕Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const eqArrays = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return arr1 === arr2;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!eqArrays(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => should PASS

// nested arrays tests
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
