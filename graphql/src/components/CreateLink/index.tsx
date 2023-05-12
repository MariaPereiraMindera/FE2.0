import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import FEED_QUERY from "../../graphql/queries/getFeed";
import CreateLinkMutation from "../../graphql/mutations/createLink";

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });

  const [createLink] = useMutation(CreateLinkMutation, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
    update: (cache, { data: { post } }) => {
      const data: { feed: { links: string[] } } | null = cache.readQuery({
        query: FEED_QUERY,
      });

      if (data) {
        cache.writeQuery({
          query: FEED_QUERY,
          data: {
            feed: {
              links: [post, ...data.feed.links],
            },
          },
        });
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value,
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value,
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default CreateLink;
