import { useState } from "react";

const Addtodo = (props) =>{
    const initialformstate = {id:null,task:"",status:"Pending"};
    const [Todo,setTodo] = useState(initialformstate);
    const HandleInput=(event)=>{
        const {name,value}=event.target
        setTodo({...Todo,[name]:value}
            )
        }


    return(
        <>
        <form onSubmit={
            event=> {
                event.preventDefault();
                if (!Todo.task||!Todo.status) return;
                props.adduser(Todo);
                setTodo(initialformstate);
        
        }}>
            <div className="input"><input type="text" className="form-control" name="task" placeholder="Add task" onChange={HandleInput} value={Todo.task}/>
      <button type="submit" className="btn bg-info">ADD</button></div>
    </form>
        </>
    ) 
}
export default Addtodo;