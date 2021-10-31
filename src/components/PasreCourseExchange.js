import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const usePasreCourseExchange = () => {
  const dispatch = useDispatch();
  const courseExchange = useSelector((state) => state.courseExchange);
  let arrayCourseExchange = [];
  // delete this file
  //fix
  for (const item in courseExchange) {
    if (Object.hasOwnProperty.call(courseExchange, item)) {
      arrayCourseExchange.push({
        exchange: item,
        value: Math.floor(courseExchange[item] * 100) / 100,
      });
    }
  }
  useEffect(() => {
    dispatch({
      type: "arrayCourseExchange",
      payload: arrayCourseExchange,
    });
  }, [arrayCourseExchange, dispatch]);
};
export default usePasreCourseExchange;
