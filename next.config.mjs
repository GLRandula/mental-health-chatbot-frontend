/** @type {import('next').NextConfig} */
const nextConfig = {   
    images: {
        domains: [],
      },
      webpack: (config) => {
        config.module.rules.push({
          test: /\.node/,
          use: "raw-loader",
        });
        return config;
      },
};

export default nextConfig;
