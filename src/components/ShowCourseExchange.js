import { React } from "react";
import { useSelector } from "react-redux";
import ExchangeItem from "./ExchangeItem";
const ShowCourseExchange = () => {
  const arrayCourseExchange = useSelector((state) => state.arrayCourseExchange);
  return (
    <div>
      {arrayCourseExchange.map((item, index) => {
        return <ExchangeItem item={item} index={index} />;
      })}
    </div>
  );
};
export default ShowCourseExchange;
