import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    coverImage: { type: "string", required: true },
    excerpt: { type: "string" },
    tags: { type: "list", of: { type: "string" } },
    category: { type: "enum", options: ["technology"], required: true },
    published: { type: "boolean", required: true },
  },
  computedFields: {
    permalink: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath,
    },
  },
  contentType: "mdx",
}));

export default makeSource({
  contentDirPath: "src/content/blogs",
  documentTypes: [Post],
  disableImportAliasWarning: true,
});
