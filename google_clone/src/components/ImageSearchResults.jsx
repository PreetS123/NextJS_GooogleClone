import Link from "next/link";
import React from "react";

const ImageSearchResults = ({ results }) => {
  // console.log("image search result",results);
  return (
    <div className="pb-24 mt-4">
      <div className="grid gid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results?.items?.map((result) => (
          <div key={result?.link} className="mb-8">
            <div className="group">
              <Link href={result?.image?.contextLink}>
                <img
                  src={result?.link}
                  alt={result?.title}
                  className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
                />
              </Link>
              <Link href={result?.image?.contextLink}>
                <h2 className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800">
                  {result?.title}
                </h2>
              </Link>
              <Link href={result?.image?.contextLink}>
                <p className="group-hover:underline truncate font-medium text-gray-600">
                  {result?.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchResults;
