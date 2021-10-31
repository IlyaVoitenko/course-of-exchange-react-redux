import React from "react";
import { useSelector } from "react-redux";

const ExchangeItem = ({ item, index }) => {
  const { value, exchange } = item;
  const baseСurrency = useSelector((state) => state.baseСurrency);
  return (
    <div key={index}>
      1 {baseСurrency} = {value} {exchange}
    </div>
  );
};
export default ExchangeItem;
