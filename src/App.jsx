import Project from './components/Project'
import {TOKEN} from './secret/token'

function App() {
  
  
  return (
    <>
      <Project token={TOKEN} />
    </>
  )
}

export default App
