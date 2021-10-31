import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ChangeCurrency = () => {
  const arrayCourseExchange = useSelector((state) => state.arrayCourseExchange);
  const arrayQueryChangeCurrency = useSelector(
    (state) => state.arrayQueryChangeCurrency
  );
  const resultChangeCurrency = useSelector(
    (state) => state.resultChangeCurrency
  );
  //on click logic  to function
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
          onClick={() => {
            let valueChangeCurrency = +arrayQueryChangeCurrency[0];
            //USD  valueFirstChangeCurrency base currency
            //let valueFirstChangeCurrency = arrayQueryChangeCurrency[1];
            let valueSecondChangeCurrency = arrayQueryChangeCurrency[3];
            //change on courseExchange to  object.entries()
            //change forEach to Find()
            //create a new branch in git
            arrayCourseExchange.forEach((element) => {
              if (valueSecondChangeCurrency === element.exchange) {
                let result = element.value * valueChangeCurrency;
                dispatch({
                  type: "resultChangeCurrency",
                  payload: Math.floor(result * 100) / 100,
                });
              }
            });
          }}
        >
          Result
        </button>
      </p>
      <span> example format input: 15 USD in UAH </span>
    </div>
  );
};
export default ChangeCurrency;
