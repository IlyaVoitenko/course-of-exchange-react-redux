import "./App.css";
import useCourses from "./components/useCourses/useCourses";
import Navigate from "./components/Navigate/Navigate";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChangeCurrency from "./components/ChangeCurrency";
import ShowCourseExchange from "./components/ShowCourseExchange";
function App() {
  useCourses();
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route path="/ChangeCurrency">
            <ChangeCurrency />
          </Route>
          <Route path="/">
            <ShowCourseExchange />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
