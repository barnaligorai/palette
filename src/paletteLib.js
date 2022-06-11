const chalk = require('chalk');
const { Color } = require('./color.js');

const isValidRGB = (rgb) =>
  rgb.length === 3 && rgb.every(pigment =>
    pigment < 256 && pigment >= 0);

const createBox = (rgb, callback, stdOut, stdErr) => {
  const color = new Color(rgb);

  if (!isValidRGB(color.rgb())) {
    stdErr(chalk.red(`Invalid input\n${chalk.green('Format : r,g,b')}`));
    return;
  }

  callback(color.hex(), stdOut);

  process.stdin.destroy();
};

module.exports = { createBox, isValidRGB };
