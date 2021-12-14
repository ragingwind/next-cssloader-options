'use strict'

const mergeOptions = require('merge-options');

function equalRegex(src, target) {
  return src instanceof RegExp && src.toString() == target.toString()
}

function findCssLoader(nextConfig) {
  try {
    return nextConfig.module.rules
      .find(rule => rule.oneOf)
      .oneOf.find(rule => equalRegex(rule.test, /\.module\.css$/))
      .use.find(({ loader }) => loader.includes('css-loader'))
  } catch (e) {
    return null;
  }
}

module.exports = (nextConfig = {}) => ({
  ...nextConfig,
  webpack(config, options) {
    const { cssLoaderOptions } = options.config;
    const cssLoader = findCssLoader(config);

    if (cssLoader && cssLoaderOptions) {
      cssLoader.options = mergeOptions(cssLoader.options, cssLoaderOptions);
    }

    return config;
  }
})