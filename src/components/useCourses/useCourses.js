import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCources } from "../API";
const useCourses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCources()
      .then((data) => {
        dispatch({
          type: "setCourseExchange",
          payload: data.rates,
        });
        dispatch({
          type: "setBaseСurrency",
          payload: data.base,
        });
      })
      .catch((error) => console.log(error));
  }, [dispatch]);
};
export default useCourses;
