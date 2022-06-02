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
  env:{
    type:'dasdsad',
  },
}

module.exports = nextConfig;