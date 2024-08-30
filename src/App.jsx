import Project from './components/Project'
import {TOKEN} from './secret/token'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  
  
  return (
    <>
      <Project token={TOKEN} />
    </>
  )
}

export default App
