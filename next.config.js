/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  distDir: '.next',
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: ['node_modules'],
    };

    return config;
  },
};
