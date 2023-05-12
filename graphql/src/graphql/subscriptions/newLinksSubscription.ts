import { gql } from "@apollo/client";

export default gql`
  subscription NewLinks {
    newLink {
      id
      url
      description
    }
  }
`;