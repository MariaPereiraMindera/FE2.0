import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { Container } from "./styled-components";

const LogoutPage = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Title text="Logout" />
      <Button
        text="Logout"
        onClick={() => {
          dispatch(logoutUser());
        }}
      />
    </Container>
  );
};

export default LogoutPage;
