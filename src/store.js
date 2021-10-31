import { createStore } from "redux";
let initialState = {
  courseExchange: {},
  resultChangeCurrency: "",
  arrayCourseExchange: [],
  arrayQueryChangeCurrency: [],
  baseСurrency: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setCourseExchange":
      return { ...state, courseExchange: { ...action.payload } };
    case "setBaseСurrency":
      return { ...state, baseСurrency: action.payload };
    case "arrayCourseExchange":
      return { ...state, arrayCourseExchange: [...action.payload] };
    case "queryChangeCurrency":
      return { ...state, arrayQueryChangeCurrency: [...action.payload] };
    case "getResultChangeCurrency":
      return { ...state, resultChangeCurrency: action.payload };
    default:
      return state;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
