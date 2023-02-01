import React, { useState, useContext } from "react";
import UserContext from "../../context/user/context";
import FirstChild from "../../components/FirstChild";
import SecondChild from "../../components/SecondChild";
import ThirdChild from "../../components/ThirdChild";
import { Container, SecondContainer } from "./styled-components";

const Form: React.FC = () => {
  const { setState, state } = useContext(UserContext);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    setState({
      name,
      lastName,
      email,
    });
  };

  return (
    <Container>
      <h3>Este é o componente Pai</h3>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="LastName"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
      </div>

      <p>Name: {state.name}</p>
      <p>LastName: {state.lastName}</p>
      <p>Email: {state.email}</p>

      <SecondContainer>
        <h2>Estes sao os filhos</h2>
        <FirstChild />
        <SecondChild />
        <ThirdChild />
      </SecondContainer>
    </Container>
  );
};

export default Form;
