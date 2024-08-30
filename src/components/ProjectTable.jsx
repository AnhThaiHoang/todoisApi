 
function ProjectTable({projects}){

    return(
        <table className="table table-border-bottom table-dark">
            <thead>
                <tr>
                    <th>name</th>
                    <th>url</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {projects.map((e, i) =>
                    <tr  key = {i}>
                        <td>{e.name}</td>
                        <td>{e.url}</td>
                        <td></td>
                    </tr>
                )}
            </tbody>
        </table>
    )

}

export default ProjectTable;