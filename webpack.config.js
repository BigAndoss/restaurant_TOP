const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry:{ 
    index : './src/index.js',
    // landing : './src/landing.js',
  },
  mode:'production',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })],
};