const path = require('path');
const fs = require('fs');

// read js files name of js client
const jsfiles = fs.readdirSync(path.join(__dirname, 'assets', 'js')).reduce((a, b) => {
  let handleB = b.split('.js').join('');
  if(a instanceof Object && !a[handleB]) {
    a[handleB] = path.join(__dirname, 'assets', 'js', b);
  }
  return a;
}, {});

// read css files name of js client
const cssfiles = fs.readdirSync(path.join(__dirname, 'assets', 'css')).reduce((a, b) => {
  let handleB = b.split('.css').join('');
  if(a instanceof Object && !a[handleB]) {
    a[handleB] = path.join(__dirname, 'assets', 'css', b);
  }
  return a;
}, {});

const jsclient = {
  entry: jsfiles,
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: '[name].js'
  },
  mode: 'production'
};

module.exports = [jsclient];