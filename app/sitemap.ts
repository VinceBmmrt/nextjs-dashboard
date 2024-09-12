import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextjs-dashboard-vincebmmrts-projects.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*dCkBR3Q3lkGMKeAh.png",
      ],
    },
    {
      url: "https://nextjs-dashboard-vincebmmrts-projects.vercel.app/dashboard",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*dCkBR3Q3lkGMKeAh.png",
      ],
    },
    {
      url: "https://nextjs-dashboard-vincebmmrts-projects.vercel.app/dashboard/invoices",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*dCkBR3Q3lkGMKeAh.png",
      ],
    },
    {
      url: "https://nextjs-dashboard-vincebmmrts-projects.vercel.app/dashboard/customers",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
      images: [
        "https://miro.medium.com/v2/resize:fit:1400/format:webp/0*dCkBR3Q3lkGMKeAh.png",
      ],
    },
  ];
}
