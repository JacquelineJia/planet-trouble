'use strict';
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('.'),
    filename: 'planet-trouble.js',
  },
  module: {
    rules: []
  },
};
