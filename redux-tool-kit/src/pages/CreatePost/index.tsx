import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/posts/postsSlice";
import { getUsername } from "../../features/user/selectors";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container } from "./styled-components";

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);

  const [text, setText] = useState("");

  return (
    <Container>
      <Title text="Post" />
      <Input
        value={text}
        placeholder="Text"
        onChange={(textInput) => setText(textInput)}
      />
      <Button
        text="Post"
        onClick={() => {
          dispatch(addPost({ text, username }));
          setText("");
        }}
      />
    </Container>
  );
};

export default CreatePostPage;
