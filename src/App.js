import './App.css';
import React,{useState} from 'react';
import Addtodo from './Components/Addtodo';
import Viewtodo from './Components/Viewtodo';
import Edittodo from './Components/Edittodo';

function App() {
  const [Total,setTotal] = useState([ 
     {id:1,task:"Submit Assignments",status:"Pending"}
])
const [taskedit,setTaskedit] = useState(false)

const [edit,Setedit] = useState(false)

  const [statuss,Setstatus] = useState("Completed")
    const adduser = (user)=>{
    user.id=Total.length+1;
    setTotal([...Total,user]);
  } 

 const editrow = (user) =>{
  Setedit(true)
  Setstatus("Completed");
  setTotal(Total.map((users)=>{
    if (users.id === user.id) {
      return {...users, status:statuss };
      } else {
      return users;
      } 
  }
  ))
 }

 const reditrow = (user) =>{
  Setedit(false)
  Setstatus("Pending");
  setTotal(Total.map((users)=>{
    if (users.id === user.id) {
      return {...users, status:statuss };
      } else {
      return users;
      } 
  }
  ))

 }

if (edit===true){
  var edits = reditrow;
}else{
  var edits = editrow;
}
  
 const deleteuser = (id) =>{
  setTotal(Total.filter((user)=>user.id!==id));
 }

 const initialeditstate={id:null,task:"",status:""};
 const [currentuser,setCurrentuser]=useState(initialeditstate);
 const editing = (user)=>{   /*This is sent to table to the button change*/
   setTaskedit(true);
   setCurrentuser({id:user.id,task:user.task,status:user.status})}
 
   const updateuser=(id,updateduser)=>{/*This function is sent to editing form where the form provides the value to e=which this changes the list*/
   setTaskedit(false);
   setTotal(Total.map((user)=>(user.id===id?updateduser:user)))
 }
 

  return (<>
    <div className="App" >
      <div className='box'>
        <div className='task'>
      <div className='text-center'><h2>Task List</h2></div>
      
        {taskedit?(<div><Edittodo updateuser={updateuser} editing={editing} currentuser={currentuser} /></div>):(<div><Addtodo adduser={adduser}/></div>)}
        
      <div className='table'><Viewtodo editing={editing} edits={edits} deleteuser={deleteuser} Total={Total}/></div>  
      </div></div><div></div>
    </div></>
    
  );
}

export default App;
