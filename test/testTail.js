const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});
