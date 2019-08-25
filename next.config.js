const webpack = require('webpack');

module.exports = {
  webpack (config) {
    config.plugins.unshift(new webpack.DefinePlugin({
      'process.env.MY_VAR': 'process.browser ? undefined : "serverside only"'
    }));
    return config;
  }
};
