import { React } from "react";
import { useSelector } from "react-redux";
import ExchangeItem from "../ExchangeItem";
import { getCourseExchange } from "../ChangeCurrency/selectors";
const ShowCourseExchange = () => {
  const courseExchange = useSelector(getCourseExchange);
  return (
    <div>
      {Object.entries(courseExchange).map(([key, value], index) => {
        return <ExchangeItem key={index} item={[key, value]} index={index} />;
      })}
    </div>
  );
};
export default ShowCourseExchange;
