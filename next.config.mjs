/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // domains: ["res.cloudinary.com"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.ibb.co",
          port: "",
          pathname: "**",
        },
      ],
    },
  };
  
  export default nextConfig;