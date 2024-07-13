import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-content";
import Link from "next/link";

export default function Home() {
  MDXContent({ code: posts[0].content });
  console.log(posts);
  return (
    <div className="w-full flex items-center justify-center gap-5 flex-col">
      {posts.map((blog) => (
        <Link href={blog.permalink} key={blog.slug}>
          <h1 className="text-red-500">{blog.title}</h1>
          <p>{blog.date}</p>
          <p>{blog.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}
