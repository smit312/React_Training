import { createStore } from "redux";
// import reducer from "./reducers";
import reducers from "./reducers/index";
// import reducers from "./reducers/index";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
