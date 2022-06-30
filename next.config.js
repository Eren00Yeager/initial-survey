const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,

      }
    }
    return config
  },
  optimizeFonts: false,
}

module.exports = nextConfig;