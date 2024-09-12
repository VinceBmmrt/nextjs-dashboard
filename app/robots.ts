import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/private/",
        "/dashboard/customers/",
        "/dashboard/invoices/create",
        "/dashboard/invoices/[id]/edit",
      ],
    },
    sitemap:
      "https://nextjs-dashboard-vincebmmrts-projects.vercel.app/sitemap.xml",
  };
}
