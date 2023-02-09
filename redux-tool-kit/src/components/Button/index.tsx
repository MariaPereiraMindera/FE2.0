import React from "react";
import { ButtonComponent } from "./styled-components";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
};

export default Button;
