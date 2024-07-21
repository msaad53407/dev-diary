"use client";

import { LucideSearch } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchBox = ({ setOpen }: Props) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (setOpen) setOpen(false);
    router.push(`/search?query=${query}`);
  };

  return (
    <form className="w-fit flex items-center bg-secondary-50" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        className="bg-transparent p-2 rounded-r-none w-[150px]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="p-2 bg-transparent rounded-l-none">
        <LucideSearch className="size-6 text-secondary-200" />
      </Button>
    </form>
  );
};

export default SearchBox;
