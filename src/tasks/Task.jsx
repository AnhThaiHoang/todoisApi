import { useState, useEffect } from "react";
import TaskTable from "./TaskTable";

function Task({api}){
    const [tasks, setTasks] = useState([]);



      useEffect(() => {
        async function fetchApi() {
            const result = await api.get("/tasks");
            setTasks(result.data);
        }

        fetchApi();
    }, []);

      return(
        <div>
            <h1>Úkoly</h1>
            <h2>Aktivní úkoly</h2>
            <TaskTable tasks={tasks} />
        </div>
      )

}

export default Task;