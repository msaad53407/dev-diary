import PostCard from "@/components/post-card";
import { allPosts } from "contentlayer/generated";
import React from "react";

const PostsPage = () => {
  const latestPublishedPosts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (latestPublishedPosts.length === 0) {
    return (
      <main className="w-full h-screen px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-text-primary">No Blogs Published</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 space-y-20 py-6">
      <section className="flex flex-col gap-4">
        <h3 className="text-2xl text-center font-bold text-text-primary">Read Latest from Novo Blog</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestPublishedPosts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PostsPage;
