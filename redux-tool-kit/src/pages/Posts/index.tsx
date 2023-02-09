import React from "react";
import { useSelector } from "react-redux";
import type { State as PostsType } from "../../features/posts/postsSlice";
import { getPosts } from "../../features/posts/selectors";
import Title from "../../components/Title";
import Post from "../../components/Post";
import { Container } from "./styled-components";

const PostsPage = () => {
  const posts: PostsType = useSelector(getPosts);

  return (
    <Container>
      <Title text="Posts" />
      <ul>
        {Object.keys(posts).map((k: string) => (
          <Post post={posts[k]} uuid={k} />
        ))}
      </ul>
    </Container>
  );
};

export default PostsPage;
