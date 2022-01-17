const initialstate = {
    page : 1,
};

const ChangePages = (state = initialstate, action) => {
  switch (action.type) {
    case "FIRSTPAGE":
      return ({page:1});
    case "SECONDPAGE":
      return ({page:2});
    default:
      return state;
  }
};

export default ChangePages;
