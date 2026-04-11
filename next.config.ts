import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*', // Catches all routes on the old domain
        destination: 'https://rohit-og-portfolio.vercel.app/:path*', // Your other Vercel project's URL
        permanent: true, // This sets the status code to 308
      },
    ];
  },
};

export default nextConfig;
