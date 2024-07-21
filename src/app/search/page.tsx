import PostCard from "@/components/post-card";
import { allPosts } from "contentlayer/generated";
import React from "react";

type Props = {
  searchParams: {
    query?: string;
  };
};

const SearchPage = ({ searchParams: { query } }: Props) => {
  if (!query) {
    return (
      <main className="w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-text-primary">Search something to get started</h1>
      </main>
    );
  }

  const postsToShow = allPosts
    .filter((post) => post.published)
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-20 py-6">
      <section className="flex flex-col gap-4">
        <h3 className="text-2xl text-center font-bold text-text-primary">
          Search Results for <span className="text-theme-primary capitalize">{query}</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postsToShow.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
