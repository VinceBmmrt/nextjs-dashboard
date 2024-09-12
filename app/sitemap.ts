import { NextApiResponse } from "next";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
  const baseUrl = "https://nextjs-dashboard-vincebmmrts-projects.vercel.app";

  const staticPages = [
    "",
    "about",
    "contact",
    "dashboard",
    "dashboard/customers",
    "dashboard/invoices",
    // Add more static routes here
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        return `
          <url>
            <loc>${baseUrl}/${page}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
