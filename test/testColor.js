const { Color } = require('../src/color.js');

const assert = require('assert');

describe('Color', () => {
  it('should give the rgb value', () => {
    const color = new Color(['255', '255', '255']);
    assert.deepStrictEqual(color.rgb(), [255, 255, 255]);
  });

  it('should give the hex value', () => {
    const color = new Color([255, 255, 255]);
    assert.deepStrictEqual(color.hex(), '#ffffff');
  });

  it('should give six digit hex value', () => {
    const color = new Color([1, 2, 3]);
    assert.deepStrictEqual(color.hex(), '#010203');
  });

});
