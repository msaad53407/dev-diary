import { MDXContent } from "@/components/mdx-content";
import TagLine from "@/components/tag-line";
import { formatDate } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug?: string;
  };
};

export const generateMetadata = ({ params: { slug } }: Props): Metadata => {
  if (!slug) notFound();

  const blogPost = getPostFromSlug(slug);

  if (!blogPost || !blogPost.published) notFound();

  return {
    title: blogPost.title,
    description: blogPost.description,
    openGraph: {
      title: blogPost.title,
      description: blogPost.description,
      images: [blogPost.coverImage],
      tags: blogPost.tags,
    },
  };
};

export const generateStaticParams = () => {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
};

const getPostFromSlug = (slug: string) => {
  return allPosts.find((post) => post.slug === slug);
};

const PostPage = ({ params: { slug } }: Props) => {
  if (!slug) notFound();

  const blogPost = getPostFromSlug(slug);

  if (!blogPost || !blogPost.published) notFound();

  return (
    <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-6">
      <section className="max-w-screen-sm mx-auto flex flex-col gap-4 justify-center">
        <span className="px-2 py-1 rounded-xl bg-theme-primary-light w-fit text-theme-primary text-sm capitalize">
          {blogPost.category}
        </span>
        <h1 className="text-3xl font-bold text-text-primary">{blogPost.title}</h1>
        <div className="flex gap-3">
          <h4 className="text-sm font-normal text-secondary-400">Muhammad Saad</h4>
          <h4 className="text-sm font-normal text-secondary-400">{formatDate(blogPost.date)}</h4>
        </div>
        <div className="w-full flex items-center gap-2  flex-wrap">
          {blogPost.tags && blogPost.tags.length > 0 && blogPost.tags.map((tag) => <TagLine key={tag}>{tag}</TagLine>)}
        </div>
        <Image
          src={blogPost.coverImage}
          alt="Next.js"
          width={500}
          height={500}
          quality={100}
          className="w-full h-auto object-cover rounded-xl self-center"
        />
        <article className="prose self-center w-full">
          <MDXContent code={blogPost.body.code} />
        </article>
      </section>
    </main>
  );
};

export default PostPage;
