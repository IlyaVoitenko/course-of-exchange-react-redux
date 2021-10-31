import { createStore } from "redux";
let initialState = {
  courseExchange: {
    AUD: 1.566015,
    CAD: 1.560132,
    CHF: 1.154727,
    CNY: 7.827874,
    GBP: 0.882047,
    JPY: 132.360679,
    USD: 1.23396,
  },
  resultChangeCurrency: "",
  arrayCourseExchange: [],
  arrayQueryChangeCurrency: [],
  baseСurrency: "UAH",
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
