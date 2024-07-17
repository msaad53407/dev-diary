import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import { MDXContent } from "@/components/mdx-content";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center gap-5 flex-col text-text-primary">
      <h1>Hello World</h1>
    </div>
  );
}
