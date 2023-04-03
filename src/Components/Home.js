import React, { useEffect, useRef, useState} from "react";
import './Home.css'
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
    //posting tasks
    const PostTask = () =>{
      APIService.PostTask(task)
      .then(resp => console.log(resp))
      .catch(error => console.log(error))
    }

    return(
        <>
        <Nav/>
        <div className="HomeContainer">
            <p id="title1">Calories intake</p>
            <p id="Caloriestxt">Today's Calories: {Calories} , Today's Carbs: {Carbs} , Today's Protein: {Protein} </p>
            <p id="title2">Tasks Statistics</p>
            <p id="Taskstxt">All Tasks: {AllTasks} , Tasks Done: {TasksDone} , Tasks Cancelled: {TasksCancelled} </p>



          {/*fetcing tasks from server*/}
            {Tasks && Tasks.length > 0 && Tasks.map(task => {
        return (
          <div >
            {user['username']  === task.owner_name ? (
            <>
            <p>owner: {task.owner_name}</p>
            <p>name: {task.name}</p>
            <p>description: {task.description}</p>
            {task.completed ? (
              <p>Completed: True</p>
            ) : (<p>Completed: False</p>)} 
            <p>----------------------------------</p>
            </>) : (<></>)
            }
          </div>
        )
      })}


      <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} />
      <input type='text' onChange={(e)=>setDescription(e.target.value)} value={description} />
      <input type='checkbox' name="m" />
      <input type='button' value='Post' onClick={PostTask} />
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
