import { createStore } from "redux";
import rootResucer from "./reducers";
const store = createStore(rootResucer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;