import React from "react";
import Form from "./pages/Form";
import GlobalContext from "./context";

const App = () => {
  return (
    <GlobalContext>
      <Form />
    </GlobalContext>
  );
};

export default App;
