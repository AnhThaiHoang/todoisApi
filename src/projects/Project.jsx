import { useEffect, useState } from "react";
import ProjectTable from "./ProjectTable";



function Project({api}){
    
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        async function fetchApi() {
            const result = await api.get("/projects");
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