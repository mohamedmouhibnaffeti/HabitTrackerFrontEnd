import React, { useEffect, useRef, useState, useReducer} from "react";
import './Home.css'
import AddTask from "./AddTask.PopUp";
import Nav from "./Nav";
import Mental from "./Mental";
import { Routes, Route } from 'react-router-dom'
import Profile from "./Profile";
import { useCookies } from 'react-cookie'
import APIService from "./APIService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditTaskPopup from "./EditTaskPopUp";
import TasksChart from "./TasksChart";
function Home(){
    //useState of task based on date selection
    const dateTest = new Date()
    const [dateSelected, setDateSelected] = useState(false)
    const [selectedDate, setSelectedDate] = useState() 
    let selectionDate = ''
    useEffect(()=>{
      if(dateSelected){
        console.log("selected",selectedDate)
        let selectionDate = selectedDate.getFullYear().toString() + ':' + selectedDate.getMonth().toString() + ':' + selectedDate.getDate().toString()
      }
    })
    
    //today's date:
    let TodayDate = ''
    const date = new Date()
    TodayDate+=date.getFullYear().toString() +':'+ date.getMonth().toString() +':'+ date.getDate().toString() 
    console.log(TodayDate)
    //User Token saved in the cookies
    const [token, setToken] = useCookies(['mytoken'])
    //username saved in the cookies
    const [user, setuser] = useCookies(['username'])
    //fetching tasks data from API
    const [Tasks, setTask] = useState([])
    useEffect(() => {
      APIService.GetTasks(token['mytoken'])
        .then(data => {
          setTask(data);
        })
        .catch(error => console.log(error));
    }, [token]);

    const [id, setId] = useState('')
    const userID = user['username']
    //activating Addtask popup
    const [trigger, setTrigger] = useState(false)
    const [editTask, toggleEditTask] = useState(false)
    return(
        <>
        <Nav/>
        <div className="HomeContainer">
            <TasksChart/>   
            <div className="AddTaskPerformer" onClick={setTrigger}>Create New Task</div>
            <AddTask trigger={trigger} setTrigger={setTrigger} />
            <div className="TasksDiv">
            <div className="TaskWrapper">
              <div className="TaskDiv">Overdue Tasks</div>
              {Tasks && Tasks.length > 0 && Tasks.map(task => {
                  return (
                    <>
                      {user['username']  === task.owner && (
                      <div className="TaskText">
                        <div>
                          <h3>Title: {task.name}</h3>
                          <p>description: {task.description}</p>
                          <h4>Priority: <span style={{

                            color : 
                                task.priority === 'Medium' ? 'green' :
                                task.priority === 'High' ? 'red' : 
                                task.priority === 'Low' ? 'darkBlue' :
                                task.priority === 'None' ? 'black' : ""
                              }}>{task.priority}</span></h4>
                          {/*{task.completed ? (
                            <p>Completed: True</p>
                            ) : (<p>Completed: False</p>)} */ }
                            
                            </div>
                            <div className="IconsWrapper">
                            <div className="HomeIcons"><FontAwesomeIcon icon="fa fa-check-square" onClick={()=>{
                                                                                                              console.log("taskname: ",task.name,"\ntaskdescription: ", task.description)
                                                                                                              const FinishTask = {
                                                                                                                  owner : userID,
                                                                                                                  name : task.name,
                                                                                                                  description : task.description,
                                                                                                                  priority : task.priority,
                                                                                                                  completed : true,
                                                                                                                  date : task.date                                                                                                                
                                                                                                              }
                                                                                                              APIService.UpdateTask(FinishTask, task.id, token['mytoken'])
                                                                                                              .then(resp => console.log(resp))
                                                                                                              .catch(error => console.log(error))
                                }} id="TaskIcon"/></div>
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa-solid fa-edit" id="TaskIcon" onClick={()=>{toggleEditTask(true);setId(task.id)}}/></div>
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa-solid fa-trash" id="TaskIcon" onClick={()=>{APIService.DeleteTask(task.id)
                                                                                                                               .then(window.location.reload())
                                                                                                                               .catch(error => console.log(error));
                                                                                                                               
                                                                                                                               }}/></div>
                            </div>
                            <EditTaskPopup editTask={editTask} toggleEditTask={toggleEditTask} identifier={id}/>
                      </div>)}
                    </>
                    )
})}
              
            </div>
            <div className="TaskWrapper">
              <div className="TaskDiv">Today's Tasks</div>
              {Tasks && Tasks.length > 0 && Tasks.map(task => {
                  const TaskFullDate = new Date(task.date) 
                  let taskDate = TaskFullDate.getFullYear().toString() +':'+ TaskFullDate.getMonth().toString() +':'+ TaskFullDate.getDate().toString()         
                  return (
                    <>
                      {user['username']  === task.owner && taskDate === TodayDate && (
                      <div className="TaskText">
                        <div>
                          <h3>Title: {task.name}</h3>
                          <p>description: {task.description}</p>
                          <h4>Priority: <span style={{

                            color : 
                                task.priority === 'Medium' ? 'green' :
                                task.priority === 'High' ? 'red' : 
                                task.priority === 'Low' ? 'darkBlue' :
                                task.priority === 'None' ? 'black' : ""
                              }}>{task.priority}</span></h4>
                          {/*{task.completed ? (
                            <p>Completed: True</p>
                            ) : (<p>Completed: False</p>)} */ }
                            
                            </div>
                            <div className="IconsWrapper">
                            <div className="HomeIcons"><FontAwesomeIcon icon="fa fa-check-square" onClick={()=>{
                                                                                                              console.log("taskname: ",task.name,"\ntaskdescription: ", task.description)
                                                                                                              const FinishTask = {
                                                                                                                  owner : userID,
                                                                                                                  name : task.name,
                                                                                                                  description : task.description,
                                                                                                                  priority : task.priority,
                                                                                                                  completed : true,
                                                                                                                  date : task.date                                                                                                                
                                                                                                              }
                                                                                                              APIService.UpdateTask(FinishTask, task.id, token['mytoken'])
                                                                                                              .then(resp => console.log(resp))
                                                                                                              .catch(error => console.log(error))
                                }} id="TaskIcon"/></div>
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa-solid fa-edit" id="TaskIcon" onClick={()=>{toggleEditTask(true);setId(task.id)}}/></div>
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa-solid fa-trash" id="TaskIcon" onClick={()=>{APIService.DeleteTask(task.id)
                                                                                                                               .then(window.location.reload())
                                                                                                                               .catch(error => console.log(error));
                                                                                                                               
                                                                                                                               }}/></div>
                            </div>
                            <EditTaskPopup editTask={editTask} toggleEditTask={toggleEditTask} identifier={id}/>
                      </div>)}
                    </>
                    )
})}
              
            </div>
            <div className="TaskWrapper">
              <input type="date" onChange={e=>{setSelectedDate(e.target.value);setDateSelected(true);window.location.reload()}} className="date-selection" value={selectedDate}/>
              {Tasks && Tasks.length > 0 && Tasks.map(task => {
                    console.log("selectedDate: ", selectionDate)
                    const TaskFullDate = new Date(task.date) 
                    let taskDate = TaskFullDate.getFullYear().toString() +':'+ TaskFullDate.getMonth().toString() +':'+ TaskFullDate.getDate().toString() 
                    return (
                    <>
                      {user['username']  === task.owner && taskDate === selectionDate && (
                      <div className="TaskText">
                        <div>
                          <h3>Title: {task.name}</h3>
                          <p>description: {task.description}</p>
                          <h4>Priority: <span style={{

                            color : 
                                task.priority === 'Medium' ? 'green' :
                                task.priority === 'High' ? 'red' : 
                                task.priority === 'Low' ? 'darkBlue' :
                                task.priority === 'None' ? 'black' : ""
                              }}>{task.priority}</span></h4>
                          {/*{task.completed ? (
                            <p>Completed: True</p>
                            ) : (<p>Completed: False</p>)} */ }
                            
                            </div>                              
                              <div className="IconsWrapper">
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa fa-check-square" onClick={()=>{
                                                                                                              console.log("taskname: ",task.name,"\ntaskdescription: ", task.description)
                                                                                                              const FinishTask = {
                                                                                                                  owner : userID,
                                                                                                                  name : task.name,
                                                                                                                  description : task.description,
                                                                                                                  priority : task.priority,
                                                                                                                  completed : true,
                                                                                                                  date : task.date                                                                                                                
                                                                                                              }
                                                                                                              APIService.UpdateTask(FinishTask, task.id, token['mytoken'])
                                                                                                              .then(resp => console.log(resp))
                                                                                                              .catch(error => console.log(error))
                                }} id="TaskIcon"/></div>
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa-solid fa-edit" id="TaskIcon" onClick={()=>{toggleEditTask(true);setId(task.id)}}/></div>
                              <div className="HomeIcons"><FontAwesomeIcon icon="fa-solid fa-trash" id="TaskIcon" onClick={()=>{APIService.DeleteTask(task.id)
                                                                                                                               .then(window.location.reload())
                                                                                                                               .catch(error => console.log(error));
                                                                                                                               
                                                                                                                               }}/></div>
                            </div>
                            <EditTaskPopup editTask={editTask} toggleEditTask={toggleEditTask} identifier={id}/>
                      </div>)}
                    </>
                    )
})}
              
            </div>
            </div>
            <br/><br/><br/><br/><br/>

        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='/Home/Profile' element={<Profile/>} />
            <Route path='/Home/Mental' element={<Mental/>} />
      </Routes>
        </div>
        </>
    );
}

export default Home;


/* fetching data from backend
{Tasks && Tasks.length > 0 && Tasks.map(task => {
  return (
    <div style={{marginTop : '5px', background : 'white', width : '400px'}} >
      {user['username']  === task.owner ? (
      <>
      <p>owner: {task.owner}</p>
      <p>name: {task.name}</p>
      <p>description: {task.description}</p>
      {task.completed ? (
        <p>Completed: True</p>
      ) : (<p>Completed: False</p>)} 
      </>) : (<></>)
      }
    </div>
  )
})}

partie mta3 l addtaskpopup:
<button onClick={setTrigger}>Add Task</button>
            <AddTask trigger={trigger} setTrigger={setTrigger}/>
            <br/><br/>
*/ 