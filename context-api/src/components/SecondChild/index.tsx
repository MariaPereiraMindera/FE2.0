import React, {useState, useContext} from 'react';
import UserContext from '../../context/user/context';

const SecondChild: React.FC = () => {
  const [lastName, setLastName] = useState<string>("");
  const { setState, state } = useContext(UserContext);

  const handleSubmit = () => {
    setState({ ...state, lastName });
  };

  return (
    <>
      <h3>Second Child</h3>
      <div>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="LastName"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>

        <p>Name: {state.name}</p>
        <p>LastName: {state.lastName}</p>
        <p>Email: {state.email}</p>
      </div>
    </>
  );
}

export default SecondChild;