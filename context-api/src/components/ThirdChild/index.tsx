import React, {useState, useContext} from 'react';
import UserContext from '../../context/user/context';

const ThirdChild: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const { setState, state } = useContext(UserContext);

  const handleSubmit = () => {
    setState({ ...state, email });
  };

  return (
    <>
      <h3>Third Child</h3>
      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>

        <p>Name: {state.name}</p>
        <p>LastName: {state.lastName}</p>
        <p>Email: {state.email}</p>
      </div>
    </>
  );
}

export default ThirdChild;