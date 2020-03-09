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

module.exports = middle;
