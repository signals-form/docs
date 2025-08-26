import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  redirects(){
    return [
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
    ]
  }
};

export default withMDX(config);
