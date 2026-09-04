import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Transakt - Family ENS Crypto App",
    short_name: "Transakt",
    description: "Family crypto treasury with ENS Subnames, Privy Smart Auth and World ID",
    start_url: "/",
    display: "standalone",
    background_color: "#F0EBE0",
    theme_color: "#1A5C3A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
