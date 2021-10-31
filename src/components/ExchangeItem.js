import React from "react";
import { useSelector } from "react-redux";

const ExchangeItem = ({ item, index }) => {
  console.log(item);
  const baseСurrency = useSelector((state) => state.baseСurrency);
  return (
    <div key={index}>
      1 {baseСurrency} = {item[0]} {item[1]}
    </div>
  );
};
export default ExchangeItem;
