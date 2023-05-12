import { gql } from "@apollo/client";

export default gql`
  query GetFeed {
    feed {
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
