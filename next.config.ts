import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '7kqfwrb2ud.ufs.sh',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
