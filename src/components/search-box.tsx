"use client";

import { LucideSearch } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

type Props = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBox = ({ setOpen }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (setOpen) setOpen(false);
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    setQuery(searchParams.get("query") || "");
  }, [searchParams]);

  return (
    <form className="w-fit flex items-center bg-secondary-50" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        className="bg-transparent p-2 rounded-r-none w-[150px]"
        value={query}
        required
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="p-2 bg-transparent rounded-l-none hover:bg-transparent">
        <LucideSearch className="size-6 text-secondary-200" />
      </Button>
    </form>
  );
};

export default SearchBox;
