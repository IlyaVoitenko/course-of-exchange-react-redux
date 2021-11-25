import { React } from "react";
import { useSelector } from "react-redux";
import ExchangeItem from "../ExchangeItem";
const ShowCourseExchange = () => {
  const courseExchange = useSelector((state) => state.courseExchange);
  return (
    <div>
      {Object.entries(courseExchange).map(([key, value], index) => {
        return <ExchangeItem key={index} item={[key, value]} index={index} />;
      })}
    </div>
  );
};
export default ShowCourseExchange;
