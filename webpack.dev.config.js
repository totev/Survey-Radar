const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
