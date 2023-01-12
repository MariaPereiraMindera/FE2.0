import React from "react";
import routes from "../../routes/routes";
import { Container, Link } from "./styled-components";

const NavBar = () => (
  <Container>
    {routes.map((e) => (
      <Link to={e.path}>{e.name}</Link>
    ))}
  </Container>
);

export default NavBar;
