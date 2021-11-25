import React from "react";
import { Link } from "react-router-dom";
const NavigateList = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">ShowCourseExchange</Link>
          </li>
          <li>
            <Link to="/changeCurrency">ChangeCurrency</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavigateList;
