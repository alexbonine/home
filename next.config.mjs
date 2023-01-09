import generateSitemap from './scripts/generateSitemap.mjs';

export default {
  compiler: {
    emotion: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      generateSitemap();
    }

    return config;
  },
};
