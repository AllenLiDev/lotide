const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("return   for    ", () => {
    assert.deepEqual(middle([1]), []) // => true
  });
  it("return   for    ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]) // => true
  });
  it("return   for    ", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]) // => true
  });
  it("return   for    ", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => true
  });
});
