export type LoginUserAction = {
  type: "LOGIN_USER";
  payload: string;
};

export const loginUserAction = (username: string): LoginUserAction => ({
  type: "LOGIN_USER",
  payload: username,
});

export type LogoutUserAction = {
  type: "LOGOUT_USER";
};

export const logoutUserAction = (): LogoutUserAction => ({
  type: "LOGOUT_USER",
});

export type Actions = LoginUserAction | LogoutUserAction;
