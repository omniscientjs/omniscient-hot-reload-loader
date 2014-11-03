var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './js/index'
  ],

  output: {
    path: __dirname + '/public',
    publicPath: '/js/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'jsx-loader?harmony',
          __dirname + '/../' // when using, change this for 'omniscient-hot-reload-loader' from npm
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
