import styled, { css } from "styled-components";

export const Button = styled.button`
  background: none;
  border: 1px solid black;
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin-right: 10px;
`;

export const Text = styled.p`
  margin-top: 20px;
`;

export const SpanText = styled.span`
  padding: 4px;

  ${({ isEven }) =>
    isEven
      ? css`
          color: red;
          border-left: 1px solid black;
          border-right: 1px solid black;
        `
      : css`
          color: blue;
          border-top: 1px solid black;
          border-bottom: 1px solid black;
        `}
`;
