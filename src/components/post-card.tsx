import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";
import TagLine from "./tag-line";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Card className="w-full sm:w-[350px] rounded-xl">
      <Link href={`/post/${post.slug}`} className="w-full sm:w-[350px] rounded-xl">
        <CardHeader className="p-3">
          <Image
            src={post.coverImage || ""}
            alt="Next.js"
            width={500}
            height={500}
            quality={100}
            className="w-full h-auto object-cover rounded-xl"
          />
        </CardHeader>
      </Link>
      <CardContent className="flex flex-col gap-3 p-4 min-h-[200px]">
        <span className="px-2 py-1 rounded-xl bg-theme-primary-light w-fit text-theme-primary text-sm capitalize">
          {post.category}
        </span>
        <h3 className="text-xl font-bold text-text-primary capitalize">{post.title}</h3>
        <div className="w-full flex items-center gap-2 flex-wrap">
          {post.tags && post.tags.length > 0 && post.tags.map((tag) => <TagLine key={tag}>{tag}</TagLine>)}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        <p className="text-sm text-secondary-400">Muhammad Saad</p>
        <p className="text-sm text-secondary-400">{formatDate(post.date)}</p>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
