import React, { useContext, useState } from "react";
import UserContext from "../../context/user/context";

const FirstChild: React.FC = () => {
  const [name, setName] = useState<string>("");
  const { setState, state } = useContext(UserContext);

  const handleSubmit = () => {
    setState({ ...state, name });
  };

  return (
    <>
      <h3>First Child</h3>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
        
        <p>Name: {state.name}</p>
        <p>LastName: {state.lastName}</p>
        <p>Email: {state.email}</p>
      </div>
    </>
  );
};

export default FirstChild;
