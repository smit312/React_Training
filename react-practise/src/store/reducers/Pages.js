const initialState = {
  page: 1,
};
const Pages = (state = initialState, action) => {
  switch (action.type) {
    case "FIRSTPAGE":
      return { page: 1 };
    case "SECONDPAGE":
      return { page: 2 };
    default:
      return state;
  }
};
export default Pages;
