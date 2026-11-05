/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true, remotePatterns: [{ protocol: "http", hostname: "bzhomefront.com" }] },
};
export default nextConfig;
