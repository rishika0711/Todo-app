import{ useState } from 'react';
import './App.css';
// import React from "react";


function App() {
  const[taskName, setTaskName] = useState();
  const[taskArr, setTaskArr] = useState([]);
  
  const addTask = ()=> {   
    const newTask = {
        name:taskName,
        completed:false,
        editMode:false,
      };
    setTaskArr([...taskArr,newTask]);
    setTaskName(" ");
    
  }
  const deleteTask = (position) => {
    setTaskArr(taskArr.filter((task, index) => index !== position));
  }
  const markAsComplete = (position)=>{
    setTaskArr(
      taskArr.map((task, index)=>
      {
        if(index===position){
          return{
            ...task,
            completed:true ,
            
          }

        }
        else{
          return task;
        }
      })
    )
  } 

//   const toggledTaskAsComplete=(position) =>
// {
//   setTaskArr(
//     taskArr.map((task,index)=>{
//       if(index === position){
//         return{
//           ...task,
//           markcomplete:!task.markUnComplete,
//         }
//       }
//       else{
//         return task;
//       }
//     })
//   )
// }
  const toggledEditTaskMode =(position) =>
  {
    setTaskArr(
      taskArr.map((task, index)=>{
        if(index === position){
          return{
            ...task,
            editMode: !task.editMode,
          }
        }
        else{
          return task;
        }
      })
    )
  }
  const editTaskName = (position, value)=>{
    setTaskArr(taskArr.map((task,index)=>
    {
      if(index === position){
        return{
          ...task,
          name:value,
        };
      }
      else{
        return task;
      }
    }))

  }
  return( 
    <div>
      <h1>Todo List App </h1>
      <input
      type="text"
      placeholder="task name" 
      name="todo-input-fileld"
      value={taskName}
      onChange={(e) => {
        // console.log(e.target.value);
        setTaskName(e.target.value);
       }}
       />
      <button type="button" onClick={addTask }>ADD</button>
      <h3>task</h3>
      <ol type="1">
      {
        taskArr.map((task,index)=>{
          return <li><div>
            {
              task.editMode ? <input value = {task.name}
              onChange= {(e)=>editTaskName(index,e.target.value)}
              />
           
              : <p style={{
              textDecoration:(task.completed===true)
              ? "line-through"
              : "none",
              
            }}>{task.name}</p>
          }
            {/* <p>{task.name}</p> */}
            {/* <button type="button" onClick={()=> toggledTaskAsComplete(index)}>{
              task.markUnComplete===false ? "Mark As Complete" : "Mark As UnComplete"
             }
            </button> */}
            <button type="button" onClick={()=> markAsComplete(index)}>Mark As Complete</button>
            <button type="button" onClick={()=> deleteTask(index)}>DELETE</button>
            <button type="button" onClick={()=> toggledEditTaskMode(index)}>
              {
                task.editMode === true ?"SAVE" :"EDIT"
              }
            </button>
          </div>
          </li>
        })
      }
      </ol>
    </div>
  );

}
export default App;

