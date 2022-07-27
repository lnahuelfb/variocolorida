/** @type {import('next').NextConfig} */

const allowOrigins = [
  'http://localhost:3000/',
  'https://variocolorida.vercel.app/',
  'https://variocolorida-7i6udbt8h-lnahuelfb.vercel.app/',
]

const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  runtime: 'experimental-edge',
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: allowOrigins },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
}

module.exports = nextConfig
