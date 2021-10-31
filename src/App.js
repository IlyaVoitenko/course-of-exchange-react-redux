import "./App.css";
import useCourses from "./components/useCourses";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowCourseExchange from "./components/ShowCourseExchange";
import ChangeCurrency from "./components/ChangeCurrency";
function App() {
  useCourses();
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">ShowCourseExchange</Link>
                </li>
                <li>
                  <Link to="/ChangeCurrency">ChangeCurrency</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/ChangeCurrency">
                <ChangeCurrency />
              </Route>
              <Route path="/">
                <ShowCourseExchange />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
