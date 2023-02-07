import { Actions } from "./actions";

export type State = {
  username: string;
};

export const initialState: State = {
  username: "",
};

const userReducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        username: action.payload,
      };
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
