/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com", "localhost"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "3000",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
