const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const { tail } = require('../tail');

describe("#head", () => {
  it("returns ['sad', 'delighted'] for ['happy', 'sad', 'delighted']", () => {
    assert.deepEqual(tail(['happy', 'sad', 'delighted']), ['sad', 'delighted']);
  });
});

