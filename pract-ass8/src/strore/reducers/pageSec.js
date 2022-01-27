const initialstate = {
  data: {},
};

const ChangePages = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return { data: action.payload };
    case "LOGOUT":
      return { data: {} };
    default:
      return state;
  }
};

export default ChangePages;
