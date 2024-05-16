import { useEffect, useState } from "react";

const Edittodo = (props)=>{
    const [euser,setEuser]=useState(props.currentuser);
    const oninputchange=(event)=>{
    const {name,value}=event.target
    setEuser({...euser,[name]:value}
        )
    }
    useEffect(()=>{
        setEuser(props.currentuser)},[props])
return(
        <>
            <form onSubmit={
                event=>{
                    event.preventDefault();
                    if (!euser.task) return;
                    props.updateuser(euser.id,euser);
                }
            } className="text-light">
                 <div className="input"><input type="text" className="form-control" name="task" placeholder="Edit task" onChange={oninputchange} value={euser.task}/>
      <button type="submit" className="btn bg-info">Edit</button></div>
    </form></>
        )

}
export default Edittodo;