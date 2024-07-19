import { Post } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { formatDate } from "@/lib/utils";

const FeaturedPostCard = ({ post }: { post: Post }) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="flex max-sm:w-full max-w-screen-md 2xl:max-w-max 2xl:w-full h-[400px] 2xl:h-[600px] mx-auto relative rounded-xl"
    >
      <Image
        src={post.coverImage}
        alt="Next.js"
        width={500}
        height={500}
        quality={100}
        className="w-full object-cover rounded-xl"
      />
      <Card className="w-full sm:w-[350px] absolute -bottom-14 sm:left-8">
        <CardContent className="flex flex-col gap-3 p-6 pb-3">
          <span className="px-2 py-1 rounded-xl bg-theme-primary-light w-fit text-theme-primary text-sm capitalize">
            {post.category}
          </span>
          <h3 className="text-xl font-bold text-text-primary capitalize">{post.title}</h3>
        </CardContent>
        <CardFooter className="flex justify-between p-6 pt-3">
          <p className="text-sm text-secondary-400">Muhammad Saad</p>
          <p className="text-sm text-secondary-400">{formatDate(post.date)}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default FeaturedPostCard;
