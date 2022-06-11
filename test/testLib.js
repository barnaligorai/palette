const assert = require('assert');
const { isValidRGB, createBox } = require('../src/paletteLib.js');
const identity = (text) => text;
const doNothing = () => { };

describe('isValidRgb', () => {
  it('should return true for valid rgb', () => {
    assert.strictEqual(isValidRGB([255, 255, 255]), true);
    assert.strictEqual(isValidRGB([123, 12, 2]), true);
  });

  it('should return false for invalid rgb', () => {
    assert.strictEqual(isValidRGB([256, 1, 2]), false);
    assert.strictEqual(isValidRGB([255, -1, 2]), false);
    assert.strictEqual(isValidRGB([255]), false);
  });
});

describe('createBox', () => {
  it('should show prompt for invalid rgb', () => {
    const actual = [];
    const stdErr = (message) => actual.push(message);

    createBox([1], identity, doNothing, stdErr);

    // eslint-disable-next-line max-len
    const expected = ['\u001b[31mInvalid input\u001b[39m\n\u001b[31m\u001b[32mFormat : r,g,b\u001b[39m\u001b[31m\u001b[39m'];

    assert.deepStrictEqual(actual, expected);
  });

  it('should call the callback when rgb is valid', () => {
    const actual = [];
    const cb = (arg1, arg2) => actual.push(arg1, arg2);
    createBox([1, 2, 3], cb, doNothing, doNothing);

    const expected = ['#010203', doNothing];
    assert.deepStrictEqual(actual, expected);
  });
});
