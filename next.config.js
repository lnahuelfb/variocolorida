/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  runtime: 'experimental-edge',
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "*"
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "POST, GET, OPTIONS"
  //         },
          // {
          //   key: "Access-Control-Allow-Headers",
          //   value: "Content-Type, Accept"
          // }
        // ],
      // },
    // ]
  // },
}

module.exports = nextConfig
