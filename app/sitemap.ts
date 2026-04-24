import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://filezypherr.vercel.app";

  const routes = [
    "",
    "/pdf-to-word",
    "/jpg-to-png",
    "/image-compressor",
    "/json-formatter",
    "/blog",
    "/blog/pdf-to-word-without-losing-formatting",
    "/blog/best-free-image-compressor-online",
    "/blog/reduce-pdf-size-for-email",
    "/blog/json-formatter-guide-blog-post",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
