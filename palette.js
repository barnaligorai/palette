const chalk = require('chalk');
const boxen = require('boxen');

const { createBox } = require('./src/paletteLib.js');

const drawBox = (color, stdout) => {
  const boxStyle = {
    backgroundColor: color,
    padding: 3,
    float: 'center'
  };

  stdout(boxen(chalk.white(color), boxStyle));
};

const main = () => {
  console.log('Enter rgb values (red, green, blue) :');

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', rgb => {
    createBox(rgb.trim().split(','), drawBox, console.log, console.error);
  });
};

main();
