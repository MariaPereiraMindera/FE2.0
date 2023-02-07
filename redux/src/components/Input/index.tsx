import React from "react";
import { TextInput } from "./styled-components";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
}

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
