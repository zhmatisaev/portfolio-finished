export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const EXIT_USER = "EXIT_USER";
export const DELETE_USER = "DELETE_USER";
export const EDIT_USER = "EDIT_USER";

export const add_user = (user) => ({
  type: ADD_USER,
  user,
});

export const login_user = (obj) => ({
  type: LOGIN_USER,
  obj,
});

export const exit_user = (obj) => ({
  type: EXIT_USER,
  obj,
});
export const delete_user = (password, email, obj) => ({
  type: DELETE_USER,
  password,
  email,
  obj,
});
export const edit_user = (obj) => ({
  type: EDIT_USER,
  obj,
});
