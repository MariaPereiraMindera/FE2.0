import { gql } from "@apollo/client";

export default gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;