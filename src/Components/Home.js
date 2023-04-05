import React, { useEffect, useRef, useState} from "react";
import './Home.css'
import AddTask from "./AddTask.PopUp";
import Nav from "./Nav";
import Mental from "./Mental";
import { Routes, Route } from 'react-router-dom'
import Profile from "./Profile";
import { useCookies } from 'react-cookie'
import APIService from "./APIService";

function Home(){
    var Calories = 1000;
    var Protein = 180;
    var Carbs = 50;
    
    var TasksDone = 5;
    var TasksCancelled = 2;

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
          console.log(data);
          console.log(user['username'])
        })
        .catch(error => console.log(error));
    }, [token]);

    var AllTasks = Tasks.length;
    
    //task title and description and owner
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const userID = user['username']

    const task = {
      owner : userID,
      name : title,
      description : description
    }
    //adding tasks
    const PostTask = () =>{
      APIService.PostTask(task)
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    }

    //editing Tasks
    const taskEditing = {
      owner : userID,
      name : 'hruzh',
      description : 'bla bla bla bla '
    }

    const EditTask = () => {
      APIService.UpdateTask(taskEditing, 10, token['mytoken'])
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    }

    //deleting tasks
    const DeleteTask = () => {
      APIService.DeleteTask(10)
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    }


    //activating Addtask popup
    const [trigger, setTrigger] = useState(false)
    return(
        <>
        <Nav/>
        <div className="HomeContainer">
            <p id="title1">Calories intake</p>
            <p id="Caloriestxt">Today's Calories: {Calories} , Today's Carbs: {Carbs} , Today's Protein: {Protein} </p>
            <p id="title2">Tasks Statistics</p>
            <p id="Taskstxt">All Tasks: {AllTasks} , Tasks Done: {TasksDone} , Tasks Cancelled: {TasksCancelled} </p>
            <div className="AddTaskPerformer">Create New Task</div>
            <div class="TasksDiv">
            <div class="TaskWrapper">
              <div class="TaskDiv">Overdue</div>
              <div class="TaskText">
                <h3>Task Title</h3>
                <p>Task DescriptionTask DescriptionTask DescriptionTask Description</p>
                <h4>Priority: <span style={{color : 'DarkBlue'}}>Low</span></h4>
              </div>
            </div>
            <div class="TaskWrapper">
              <div class="TaskDiv">Today's Tasks</div>
              <div class="TaskText">
                <h3>Task Title</h3>
                <p>Task DescriptionTask DescriptionTask DescriptionTask Description</p>
                <h4>Priority: <span style={{color : 'Green'}}>Medium</span></h4>
              </div>
              <div class="TaskText">
                <h3>Task Title</h3>
                <p>Task DescriptionTask DescriptionTask DescriptionTask Description</p>
                <h4 >Priority: <span style={{color : 'Red'}}>High</span></h4>
              </div>
            </div>
            <div class="TaskWrapper">
              <div class="dropdown">Date</div>
              <div class="TaskText">
                <h3>Task Title</h3>
                <p>Task DescriptionTask DescriptionTask DescriptionTask Description</p>
                <h4>Priority: <span style={{color : 'Black'}}>None</span></h4>
              </div>
              <div class="TaskText">
                <h3>Task Title</h3>
                <p>Task DescriptionTask DescriptionTask DescriptionTask Description</p>
                <h4>Priority: <span style={{color : 'Orange'}}>Important</span></h4>
              </div>
            </div>
            </div>
            <br/><br/><br/><br/><br/>
            


      <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} />
      <input type='text' onChange={(e)=>setDescription(e.target.value)} value={description} />
      <input type='checkbox' name="m" />
      <input type='button' value='Post' onClick={PostTask} />
      <input type='button' value='Edit' onClick={EditTask} />
      <input type='button' value='Delete' onClick={DeleteTask} />
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