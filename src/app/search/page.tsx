import PostCard from "@/components/post-card";
import TagLine from "@/components/tag-line";
import { cn } from "@/lib/utils";
import { allPosts } from "contentlayer/generated";
import { LucideX } from "lucide-react";
import { Metadata } from "next";
import React from "react";

type Props = {
  searchParams: {
    query?: string;
    tag?: string;
  };
};

export const generateMetadata = ({ searchParams: { query, tag } }: Props): Metadata => {
  if (!query && !tag) {
    return {
      title: "Search",
    };
  }

  return {
    title: `Search - ${query || tag}`,
  };
};

const SearchPage = ({ searchParams: { query, tag } }: Props) => {
  if (!query && !tag) {
    return (
      <main className="w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-text-primary text-center">Search something to get started</h1>
      </main>
    );
  }

  const postsToShow = allPosts
    .filter((post) => post.published)
    .filter((post) => (query ? post.title.toLowerCase().includes(query.toLowerCase()) : true))
    .filter((post) => (tag ? post.tags?.includes(tag) : true))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-20 py-6">
      <section className="flex flex-col gap-4">
        {query && (
          <h3 className="text-2xl text-center font-bold text-text-primary">
            Search Results for <span className="text-theme-primary capitalize">{query}</span>
          </h3>
        )}
        {tag && <TagLine dismissible>{tag}</TagLine>}
        <div
          className={cn(
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
            postsToShow.length > 0 ? "grid" : "flex justify-center items-center h-screen",
          )}
        >
          {postsToShow.length > 0 ? (
            postsToShow.map((post) => <PostCard post={post} key={post._id} />)
          ) : (
            <h3 className="text-2xl text-center font-bold text-text-primary">No matching posts found</h3>
          )}
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
