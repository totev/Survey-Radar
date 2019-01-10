const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
