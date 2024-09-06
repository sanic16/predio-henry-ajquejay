/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "conesiee-static.codielectro.com",
        pathname: "/openGraph/",
      },
    ],
  },
};

export default nextConfig;
