import { createStore } from "redux";
let initialState = {
  courseExchange: {},
  ArrayCourseExchange: [],
  baseСurrency: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "courseExchange":
      return { ...state, courseExchange: { ...action.payload } };
    case "baseСurrency":
      return { ...state, baseСurrency: action.payload };
    case "arrayCourseExchange":
      return { ...state, ArrayCourseExchange: [...action.payload] };
    default:
      return state;
  }
};
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
