import { defineConfig, s } from "velite";

export default defineConfig({
  root: "src/content",
  collections: {
    posts: {
      name: "Post",
      pattern: "blogs/**/*.mdx",
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.path(),
          date: s.isodate(),
          cover: s.image().optional(),
          metadata: s.metadata().optional(),
          published: s.boolean().default(true),
          excerpt: s.excerpt(),
          content: s.markdown(),
        })
        .transform((data) => ({
          ...data,
          permalink: `/${data.slug}`,
          slugAsParams: data.slug.split("/").slice(1).join("/"),
        })),
    },
  },
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
