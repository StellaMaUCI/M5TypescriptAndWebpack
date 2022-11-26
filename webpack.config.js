// https://webpack.js.org/concepts/loaders/#configuration
module.exports = {
  module: {
    rules: [  //loaders can be used at the same time
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
};
