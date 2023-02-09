import React from "react";
import { useSelector } from "react-redux";
import { getUsername } from "./features/user/selectors";
import LoginPage from "./pages/Login";
import LogoutPage from "./pages/Logout";
import CreatePostPage from "./pages/CreatePost";
import PostsPage from "./pages/Posts";

const App = () => {
  const username = useSelector(getUsername);

  return (
    <>
      {username ? <LogoutPage /> : <LoginPage />}
      {username && <CreatePostPage />}
      <PostsPage />
    </>
  );
};

export default App;
