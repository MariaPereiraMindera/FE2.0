import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
  },
  // devTools: true,
});

export default store;
