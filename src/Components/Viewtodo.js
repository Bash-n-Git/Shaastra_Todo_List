const Viewtodo = (props) =>{
    return(
        <>
        <div>
            <table>
                <tr><th>S.no</th><th>Task</th><th>Status</th><th>Actions</th></tr>
                <tbody>
                {props.Total.length>0?(
                        props.Total.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td className="todos">{user.task}</td>
                                
                                     {user.status === "Completed" ? (
                                        <td><span className="badge bg-success">Completed</span></td>
                                      ) : (
                                        <td><span className="badge bg-warning">Pending</span></td>
                                      )}
                                
                                
                                <td>
                                <div class="btn-group ">
                                      <button type="button" class="btn btn-warning" onClick={()=>props.edits(user)}>Modify</button>
                                      {user.status === "Completed" ? (
                                        <></>
                                      ) : (
                                        <button type="button" class="btn btn-primary" onClick={()=>props.editing(user)}>Edit</button>
                                    )}
                                         <button type="button" class="btn btn-danger" onClick={()=>props.deleteuser(user.id)}>Delete</button>
</div>                          </td>
                                 
                                
                               </tr>
                        ))
                    ):(
                        <tr>no data</tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Viewtodo;