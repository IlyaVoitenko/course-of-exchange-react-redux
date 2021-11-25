import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getResultChangeCurrency,
  getCourseExchange,
  getArrayQueryChangeCurrency,
} from "./selectors";
import { ResultExchangeRate } from "./helper/ResultExchangeRate";
const ChangeCurrency = () => {
  const resultChangeCurrency = useSelector(getResultChangeCurrency);
  const arrayQueryChangeCurrency = useSelector(getArrayQueryChangeCurrency);
  const courseExchange = useSelector(getCourseExchange);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="enter value"
        onChange={({ target }) => {
          let enteredString = target.value.split(" ");
          dispatch({
            type: "queryChangeCurrency",
            payload: enteredString,
          });
        }}
      ></input>
      <span>{resultChangeCurrency} </span>
      <p>
        <button
          onClick={() =>
            dispatch({
              type: "getResultChangeCurrency",
              payload: ResultExchangeRate(
                arrayQueryChangeCurrency,
                courseExchange
              ),
            })
          }
        >
          Result
        </button>
      </p>
      <span> example format input: 15 USD in CNY </span>
    </div>
  );
};
export default ChangeCurrency;
