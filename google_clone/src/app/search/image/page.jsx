"use client";
import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from "react";
import { MdOutlineRestartAlt } from "react-icons/md";

const ImageSearchPage = async ({ searchParams }) => {

    const searchKey =  await searchParams?.searchTerm;
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.INSERT_YOUR_API_KEY}&cx=${process.env.CONTEX_KEY}&q=${searchKey}&searchType=image`
  );
  if (!response.ok) throw new Error("Something went wrong");
  const data = await response.json();
  const result = data?.items;
    // console.log("resss web", data);

  if (!result) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No result found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg flex gap-2 justify-center items-center">
          Try Something else{" "}
          <MdOutlineRestartAlt className="text-3xl font-thin" />
        </p>
        <Link href={"/"} className="text-blue-500">
          Go to home
        </Link>
      </div>
    );
  }

  return <div>{result && <ImageSearchResults results={data} />}</div>;
};

export default ImageSearchPage;
