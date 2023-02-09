import { createSlice } from "@reduxjs/toolkit";
import { v4 as generateUUID } from "uuid";

export type Post = {
  text: string;
  username: string;
  likes: string[];
  comments: string[];
};

export type State = { [uuid: string]: Post };

export const initialState: State = {};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const newPost = {
        text: action.payload.text,
        username: action.payload.username,
        likes: [],
        comments: [],
      };
      state[generateUUID()] = newPost;
    },
    removePost: (state, action) => {
      delete state[action.payload];
    },
    addCommentPost: (state, action) => {
      const { uuid, comment } = action.payload;
      state[uuid].comments.push(comment);
    },
    likePost: (state, action) => {
      const { uuid, username } = action.payload;
      state[uuid].likes.push(username);
    },
    unlikePost: (state, action) => {
      const { uuid, username } = action.payload;
      state[uuid].likes = state[uuid].likes.filter((u) => u !== username);
    },
  },
});

export const { addPost, removePost, addCommentPost, likePost, unlikePost } =
  postsSlice.actions;
export default postsSlice.reducer;
