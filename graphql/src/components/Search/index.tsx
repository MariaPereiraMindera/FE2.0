import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Link from "../Link";
import searchFeed from "../../graphql/queries/searchFeed";

const Search = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [executeSearch, { data }] = useLazyQuery(searchFeed);

  return (
    <>
      <div>
        Search
        <input type="text" onChange={(e) => setSearchFilter(e.target.value)} />
        <button
          onClick={() =>
            executeSearch({
              variables: { filter: searchFilter },
            })
          }
        >
          OK
        </button>
      </div>
      {data &&
        data.feed.links.map(
          (link: { description: string; url: string; id: string }) => (
            <Link key={link.id} description={link.description} url={link.url} />
          )
        )}
    </>
  );
};

export default Search;