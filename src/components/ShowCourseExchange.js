import { React } from "react";
import { useSelector } from "react-redux";

const ShowCourseExchange = () => {
  const ArrayCourseExchange = useSelector((state) => state.ArrayCourseExchange);
  const baseСurrency = useSelector((state) => state.baseСurrency);
  return (
    <div>
      {ArrayCourseExchange.map((item, index) => {
        return (
          <div key={index}>
            1 {baseСurrency} = {item.value} {item.exchange}
          </div>
        );
      })}
    </div>
  );
};
export default ShowCourseExchange;
