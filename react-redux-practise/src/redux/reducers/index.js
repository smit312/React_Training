import { combineReducers } from "redux";
import { productReducer, selectedproductReducer } from "./ProductReducer";
const reducers = combineReducers({
  allproducts: productReducer,
  product: selectedproductReducer,
});
export default reducers;
