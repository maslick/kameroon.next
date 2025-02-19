import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  swSrc: "app/sw.js",
  swDest: "public/sw.js",
  reloadOnOnline: true,
  cacheOnNavigation: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        worker_threads: false
      };
    }

    // Add this configuration for Web Workers
    config.output = {
      ...config.output,
      globalObject: 'self'
    };

    return config;
  }
};

export default withSerwist(nextConfig);
