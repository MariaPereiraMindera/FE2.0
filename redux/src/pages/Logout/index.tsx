import React from "react";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../store/user/actions";
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
          dispatch(logoutUserAction());
        }}
      />
    </Container>
  );
};

export default LogoutPage;
