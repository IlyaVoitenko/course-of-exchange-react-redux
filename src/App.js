import "./App.css";
import FetchCourses from "./components/FetchCourses";
import ShowCourseExchange from "./components/ShowCourseExchange";
import PasreCourseExchange from "./components/PasreCourseExchange";
function App() {
  FetchCourses();
  PasreCourseExchange();
  return (
    <div className="App">
      <ShowCourseExchange />
    </div>
  );
}

export default App;
