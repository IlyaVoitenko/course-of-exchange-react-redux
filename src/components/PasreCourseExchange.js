import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const PasreCourseExchange = () => {
  const dispatch = useDispatch();
  const courseExchange = useSelector((state) => state.courseExchange);
  let arr = [];
  for (const item in courseExchange) {
    if (Object.hasOwnProperty.call(courseExchange, item)) {
      arr.push({
        exchange: item,
        value: Math.floor(courseExchange[item] * 100) / 100,
      });
    }
  }
  useEffect(() => {
    dispatch({
      type: "arrayCourseExchange",
      payload: arr,
    });
  }, [arr]);
};
export default PasreCourseExchange;
