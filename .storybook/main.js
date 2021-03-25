const path = require('path')
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.resolve.plugins = [new TsConfigPathsPlugin()]
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
      }
    )
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
};