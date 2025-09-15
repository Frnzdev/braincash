import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BrainCash",
    short_name: "BrainCash",
    description: "Sua plataforma de educação finaceira",
    start_url: "/",
    display: "standalone",
    background_color: "#0fb24b",
    theme_color: "#0fb24b",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
