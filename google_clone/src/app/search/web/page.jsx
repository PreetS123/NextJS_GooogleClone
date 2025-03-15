import React from "react";

const WebSearchPage = async ({ searchParams }) => {
  // https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.INSERT_YOUR_API_KEY}&cx=${process.env.CONTEX_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await response.json();
  const result = data.items;
//   console.log("resss web", result);

  return (
    <div>
      {result &&
        result?.map((res) => {
          return <div key={res}>{res.title}</div>;
        })}
    </div>
  );
};

export default WebSearchPage;
