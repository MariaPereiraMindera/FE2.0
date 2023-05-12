import React from "react";
import Link from "../Link";
import { useQuery } from "@apollo/client";
import GetFeed from "../../graphql/queries/getFeed";

const LinkList = () => {
  const { data, error, loading } = useQuery(GetFeed);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data &&
        !loading &&
        data.feed.links.map(
          (link: { description: string; url: string; id: string }) => (
            <Link key={link.id} url={link.url} description={link.description} />
          )
        )}
    </div>
  );
};

export default LinkList;