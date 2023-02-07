import { v4 as generateUUID } from "uuid";
import { Actions } from "./actions";

export type Post = {
  text: string;
  username: string;
  likes: string[];
  comments: string[];
};

export type State = { [uuid: string]: Post };

export const initialState: State = {};

const postsReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        [generateUUID()]: {
          text: action.payload.text,
          username: action.payload.username,
          likes: [],
          comments: [],
        },
      };
    case "REMOVE_POST": {
      const { [action.payload]: removedPost, ...remainingPosts } = state;
      return remainingPosts;
    }
    case "ADD_COMMENT_POST": {
      const { uuid, comment } = action.payload;
      return {
        ...state,
        [uuid]: {
          ...state[uuid],
          comments: [...state[uuid].comments, comment],
        },
      };
    }
    case "LIKE_POST": {
      const { uuid, username } = action.payload;
      return {
        ...state,
        [uuid]: {
          ...state[uuid],
          likes: [...state[uuid].likes, username],
        },
      };
    }
    case "UNLIKE_POST": {
      const { uuid, username } = action.payload;
      const updatedLikes = state[uuid].likes.filter((u) => u !== username);
      return {
        ...state,
        [uuid]: {
          ...state[uuid],
          likes: updatedLikes,
        },
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
