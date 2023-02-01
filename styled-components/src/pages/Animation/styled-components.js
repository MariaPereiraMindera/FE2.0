import styled, { keyframes } from "styled-components";

const example = keyframes`
  0% {
    left: 0;
    top: 0;
  }

  25% {
    left: 100px;
    top: 0;
  }

  50% {
    left: 100px;
    top: 100px
  }

  75% {
    left: 0;
    top: 100px;
  }

  100% {
    left: 0;
    top: 0;
  }
`;

export const Container = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  position: relative;
  /* animation: 4s ${example}; */
  /* animation-name: ${example};
  animation-duration: 2s; */
  /* animation-delay: -1s; */
  /* animation-iteration-count: infinite; */
  /* animation-direction: alternate-reverse; */
  /* animation-timing-function: ; */
  animation: ${example} 2s;
`;

export const Wrapper = styled.div`
  margin-top: 140px;
  display: flex;
`;

const dotExample = keyframes`
  from {
    transform: scale(0.8);
  }

  to {
    transform: scale(1.3);
  }
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #555;
  margin-right: 8px;

  animation: ${dotExample} 0.6s infinite alternate;
  animation-delay: ${({ delay }) => `${delay}s`};
`;
