class Color {
  #rgb;

  constructor(pigments) {
    this.#rgb = pigments;
  }

  rgb() {
    return [...this.#rgb.map(pigment => +pigment)];
  }

  hex() {
    const hexValues = this.rgb().map(pigment =>
      pigment.toString(16).padStart(2, '0'));

    return `#${hexValues.join('')}`;
  }
}

module.exports = { Color };
