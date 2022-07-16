const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
});
