const takeUntil = (array, callback) => {
  let slice = [];
  for (const element of array) {
    if (!callback(element)) {
      slice.push(element);
    } else {
      return slice;
    }
  }
}

// Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// output
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

// tests
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

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']); // => should PASS
