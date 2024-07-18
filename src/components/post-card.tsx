import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { formatDate } from "@/lib/utils";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.slug}`} className="w-[350px] rounded-xl">
      <Card className="w-full">
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
        <CardContent className="flex flex-col gap-3 p-4">
          <span className="px-2 py-1 rounded-xl bg-theme-primary-light w-fit text-theme-primary text-sm capitalize">
            {post.category}
          </span>
          <h3 className="text-xl font-bold text-text-primary capitalize">{post.title}</h3>
        </CardContent>
        <CardFooter className="flex justify-between p-4">
          <p className="text-sm text-secondary-400">Muhammad Saad</p>
          <p className="text-sm text-secondary-400">{formatDate(post.date)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
