import { allPosts } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPublishedPosts: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.published)
    .map((post) => ({
      url: post.permalink,
      lastModified: new Date(post.date),
      changeFrequency: "weekly",
    }));

  return [
    {
      url: "/",
      changeFrequency: "monthly",
    },
    ...allPublishedPosts,
  ];
}
