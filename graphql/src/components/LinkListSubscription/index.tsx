import React from "react";
import Link from "../Link";
import { useQuery } from "@apollo/client";
import GetFeed from "../../graphql/queries/getFeed";
import NewLinksSubscription from "../../graphql/subscriptions/newLinksSubscription";

const LinkListSubscription = () => {
  const { data, loading, subscribeToMore } = useQuery(GetFeed);

  subscribeToMore({
    document: NewLinksSubscription,
    updateQuery: (prev, { subscriptionData }) => {
      if (!subscriptionData.data) return prev;
      const newLink = subscriptionData.data.newLink;
      // @ts-ignore
      const exists = prev.feed.links.find(({ id }) => id === newLink.id);
      if (exists) return prev;

      return Object.assign({}, prev, {
        feed: {
          links: [newLink, ...prev.feed.links],
          count: prev.feed.links.length + 1,
          __typename: prev.feed.__typename,
        },
      });
    },
  });

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

export default LinkListSubscription;