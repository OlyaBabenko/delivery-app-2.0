/** @type {import('next').NextConfig} */
const nextConfig = {
   env: {
      api: 'http://127.0.0.1:8000',
   },
   images: {
      formats: ['image/webp'],
      loader: 'custom',
      loaderFile: './utils/imageLoader.js',
      remotePatterns: [
         {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '8000',
            pathname: '/media/profile_pictures/**',
         },
      ],
   },
   webpack(config) {
      const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
      config.module.rules.push(
         {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/,
         },
         {
            test: /\.svg$/i,
            issuer: fileLoaderRule.issuer,
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
            use: ['@svgr/webpack'],
         },
      );
      fileLoaderRule.exclude = /\.svg$/i;
      return config;
   },
};

export default nextConfig;
