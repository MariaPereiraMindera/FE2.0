import React, { useState } from "react";
import { Button, Text, SpanText } from "./styled-components";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
      <Text>
        Total: <SpanText isEven={count % 2 === 0}>{count}</SpanText>
      </Text>
    </>
  );
};

export default App;
