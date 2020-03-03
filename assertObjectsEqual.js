const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length != key2.length) {
    return false;
  }
  for (const key of key1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) console.log(`🏀🏀🏀Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)} `)
  else console.log(`🔕🔕🔕Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd); // => false
