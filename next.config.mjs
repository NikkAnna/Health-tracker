/** @type {import('next').NextConfig} */

import createMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    optimizePackageImports: ['@material-ui/core']
  }
};

const withMDX = createMDX();

export default withMDX(nextConfig);
