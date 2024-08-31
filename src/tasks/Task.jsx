import axios from "axios";
import { useState, useEffect } from "react";
import TaskTable from "./TaskTable";

function Task({token}){
    const [tasks, setTasks] = useState([]);

    const todoistApi = axios.create({
        baseURL: 'https://api.todoist.com/rest/v2/tasks',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      useEffect(() => {
        async function fetchApi() {
            const result = await todoistApi.get();
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