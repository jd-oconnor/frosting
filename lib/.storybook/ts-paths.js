const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")

module.exports = {
  webpackFinal(config) {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ]

    return config
  },
}
