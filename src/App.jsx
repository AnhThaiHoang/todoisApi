import Project from "./projects/Project"
import {TOKEN} from './secret/token'
import axios from "axios";
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

  const todoistApi = axios.create({
    baseURL: ' https://api.todoist.com/rest/v2',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  
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
            <Route index element={<Project api={todoistApi}/>} />
          </Route>

          <Route path="/tasks">
            <Route index element={<Task api={todoistApi}/>} />
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
