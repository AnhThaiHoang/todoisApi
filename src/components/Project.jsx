import axios from "axios";
import { useEffect, useState } from "react";



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
            <ul>
                {projects.map((e, i) => 
                    <li>
                        {e.id}
                        <br/>
                        {e.color}
                    </li>
                )}
            </ul>
            {JSON.stringify(projects)}
        </div>
    )

}

export default Project;