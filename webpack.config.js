const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/lib',
    filename: 'index.js',
    library: 'use-custom-element',
    libraryTarget: 'umd',
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/index.d.ts', to: 'index.d.ts' },
    ]),
  ],
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
