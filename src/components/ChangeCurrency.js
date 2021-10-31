import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ChangeCurrency = () => {
  const courseExchange = useSelector((state) => state.courseExchange);
  const resultChangeCurrency = useSelector(
    (state) => state.resultChangeCurrency
  );
  function resultChangeCurrencyFun(courseExchange) {
    let resEntriesCourseExchange = Object.entries(courseExchange);
    let valueChangeCurrency = +arrayQueryChangeCurrency[0];
    let valueSecondChangeCurrency = arrayQueryChangeCurrency[3];
    let resFind = resEntriesCourseExchange.find(
      (item) => item[0] === valueSecondChangeCurrency
    );
    let resultChange = Math.floor(valueChangeCurrency * resFind[1] * 100) / 100;
    console.log(valueChangeCurrency * resFind[1]);
    console.log(resultChange);
    dispatch({
      type: "getResultChangeCurrency",
      payload: resultChange,
    });
  }
  const arrayQueryChangeCurrency = useSelector(
    (state) => state.arrayQueryChangeCurrency
  );
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
        <button onClick={() => resultChangeCurrencyFun(courseExchange)}>
          Result
        </button>
      </p>
      <span> example format input: 15 USD in CNY </span>
    </div>
  );
};
export default ChangeCurrency;
