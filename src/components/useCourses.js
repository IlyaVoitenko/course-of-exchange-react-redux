import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useCourses = () => {
  const URL = "https://openexchangerates.org/api/";
  let typeResponse = "latest.json?";
  const apiId = "app_id=17cb63b78edc40d6bf2f6dcf63bce9e5";
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch(`${URL}${typeResponse}${apiId}`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       console.log("data :", data);
  //       dispatch({
  //         type: "setCourseExchange",
  //         payload: data.rates,
  //       });
  //       dispatch({
  //         type: "setBaseСurrency",
  //         payload: data.base,
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }, [dispatch]);
};
export default useCourses;
