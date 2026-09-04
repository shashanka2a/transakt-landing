import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Transakt - Family ENS Crypto PWA",
    short_name: "Transakt",
    description: "Gasless family crypto treasury with Passkeys and ENS Subnames",
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
