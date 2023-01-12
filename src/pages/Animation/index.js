import React from "react";
import { Container, Wrapper, Dot } from "./styled-components";

const Animation = () => (
  <>
    <Container />
    <Wrapper>
      <Dot />
      <Dot delay={0.2} />
      <Dot delay={0.4} />
    </Wrapper>
  </>
);

export default Animation;
