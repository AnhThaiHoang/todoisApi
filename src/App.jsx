import Project from "./projects/Project"
import {TOKEN} from './secret/token'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Task from "./tasks/Task"

function App() {
  
  
  return (
    <>
      <Router>
        <nav className="navbar">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/projects"}>Projekty</Link>
            </li>
            <li>
              <Link to={"/tasks"}>Úkoly</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Navigate to={"/projects"} />} />
          <Route path="/projects">
            <Route index element={<Project token={TOKEN}/>} />
          </Route>

          <Route path="/tasks">
            <Route index element={<Task token={TOKEN}/>} />
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
