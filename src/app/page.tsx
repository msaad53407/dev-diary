import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx-content";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center gap-5 flex-col">
      {allPosts.map((blog) => (
        <Link href={blog.permalink} key={blog.slug}>
          <h1 className="text-red-500">{blog.title}</h1>
          <p>{blog.date}</p>
          <p>{blog.excerpt}</p>
          <MDXContent code={blog.body.code} />
        </Link>
      ))}
    </div>
  );
}
