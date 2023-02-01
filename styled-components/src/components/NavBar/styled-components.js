import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  padding: 20px;
  background-color: #ececec;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #000;
  margin-right: 20px;

  &:hover {
    color: #0b65ff;
  }

  &.active {
    color: #327eff;
    border-bottom: 1px solid #327eff;
  }
`;
