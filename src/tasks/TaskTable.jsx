 
function TaskTable({tasks}){

    return(
        <table className="table table-border-bottom table-light">
            <thead>
                <tr>
                    <th>id projektu</th>
                    <th>obsah</th>
                    <th>url</th>
                    <th>priorita</th>
                    <th>akce</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((e, i) =>
                    <tr  key = {i}>
                        <td>{e.project_id}</td>
                        <td>{e.content}</td>
                        <td>{e.url}</td>
                        <td>{e.priority}</td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default TaskTable;