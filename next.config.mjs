/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
    MONGODB_BLOG: process.env.MONGODB_BLOG,
  },
};

export default nextConfig;
