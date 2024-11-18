/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "swiperjs.com",
        port: "",
        pathname: "/demos/images/**", // Update this to match the correct path pattern
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // Update this to match the correct path pattern
      },
      {
        protocol: "https",
        hostname: "app.sikka.sd",
        port: "",
        pathname: "/**", // Update this to match the correct path pattern
      },
    ],
  },
};

export default nextConfig;
