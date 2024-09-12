/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all pages
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://cdnjs.cloudflare.com;
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
                img-src 'self' data: https:;
                font-src 'self' https://fonts.gstatic.com;
                connect-src 'self' https:;
                frame-ancestors 'none';
                base-uri 'self';
                form-action 'self';
              `
              .replace(/\s{2,}/g, " ")
              .trim(), // Clean up spaces
          },
        ],
      },
    ];
  },
};

export default nextConfig;
