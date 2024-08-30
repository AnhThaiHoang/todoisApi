import axios from "axios";
import { useEffect, useState } from "react";
import ProjectTable from "./ProjectTable";



function Project({token}){
    
    const [projects, setProjects] = useState([]);

    const todoistApi = axios.create({
        baseURL: ' https://api.todoist.com/rest/v2/projects',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

    useEffect(() => {
        async function fetchApi() {
            const result = await todoistApi.get();
            setProjects(result.data);
        }

        fetchApi();
    }, []);

    return(
        <div>
            <h1>Projekty:</h1>
            <ProjectTable projects={projects} />
        </div>
    )

}

export default Project;