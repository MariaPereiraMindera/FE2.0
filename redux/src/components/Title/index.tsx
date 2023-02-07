import React from "react";
import { Text } from "./styled-components";

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return <Text>{text}</Text>;
};

export default Title;
