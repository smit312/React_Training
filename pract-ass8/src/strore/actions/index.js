export const Login = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};
export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};
