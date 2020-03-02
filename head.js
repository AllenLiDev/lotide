const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🏀🏀🏀Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔕🔕🔕Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

const head = function(array) {
  if (array === undefined || array[0] === undefined) {
    return undefined;
  }
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(), undefined);
