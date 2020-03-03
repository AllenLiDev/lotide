const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🏀🏀🏀Assertion Passed: ${actual} === ${expected} `);
  } else {
    console.log(`🔕🔕🔕Assertion Failed: ${actual} !== ${expected}`);
  }
  return;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let results = {};
  for (const item in itemsToCount) {
    if (itemsToCount[item]) {
      let count = 0;
      for (const allItem of allItems) {
        if (item === allItem) count++
      }
      if (count > 0) results[item] = count;
    }
  }
  return (results);
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
