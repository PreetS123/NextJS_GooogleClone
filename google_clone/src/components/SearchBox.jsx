"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const searchTerm = searchParams.get("searchTerm");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search/web?searchTerm=${query}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-200 px-6 py-3 mr-5 flex-grow max-w-3xl items-center rounded-full shadow-lg hover:shadoow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <input
          value={query}
          type="text"
          className="w-full focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <RxCross2
          onClick={() => {
            setQuery("");
          }}
          className="text-2xl text-gray-500 cursor-pointer sm:mr-3"
        />
        <BsFillMicFill className="hidden sm:inline-flex  text-4xl text-blue-500 border-l-2 border-gray-300 cursor-pointer mr-3 pl-4" />
        <AiOutlineSearch
          onClick={handleSubmit}
          className="hidden text-2xl sm:inline-flex text-blue-500 cursor-pointer"
        />
      </form>
    </>
  );
};

export default SearchBox;
