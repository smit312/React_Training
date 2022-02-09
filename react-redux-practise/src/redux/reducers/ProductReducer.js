// import { ActionTypes } from "../contants/action-types";

// const initialState = {
//   products: [],
// };
// export const productReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SET_PRODUCTS:
//       return { ...state, products: payload };
//     default:
//       return state;
//   }
// };
// export const selectedproductReducer = (state = {}, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.SELECTED_PRODUCT:
//       return { ...state, ...payload };
//     default:
//       return state;
//   }
// };

import { ActionTypes } from "../contants/action-types";
const intialState = {
  products: [],
};

export const productReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedproductReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };

    default:
      return state;
  }
};
