const initialstate = {
  data: {},
  isLogin: false,
};

const ChangePages = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogin: true,
        data: action.payload,
      };
    case "LOGOUT":
      return {
        isLogin: false,
        data: {},
      };
    default:
      return state;
  }
};

export default ChangePages;
