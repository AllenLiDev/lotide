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

const without = (inputArray, unwantedElementArray) => {
  let resultArray = [];
  for (const element of inputArray) {
    let foundUnwanted = false;
    for (const unwantedElement of unwantedElementArray) {
      if (element === unwantedElement) {
        foundUnwanted = true;
      }
    }
    if (!foundUnwanted) resultArray.push(element);
  }
  return (resultArray)
}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), [1, "2"]); // => false

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
