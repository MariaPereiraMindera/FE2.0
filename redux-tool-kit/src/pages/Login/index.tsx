import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Container } from "./styled-components";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  return (
    <Container>
      <Title text="Login" />
      <Input
        value={username}
        placeholder="Username"
        onChange={(text) => setUsername(text)}
      />
      <Button
        text="Login"
        onClick={() => {
          dispatch(loginUser(username));
        }}
      />
    </Container>
  );
};

export default LoginPage;
