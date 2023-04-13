import React, {useState} from "react";
import './AddTaskPopup.css'
import Dropdown from "./Dropdown";
import APIService from "./APIService";
import { useRef } from "react";
import { useCookies } from 'react-cookie'
function AddTask(props) {
        //task title and description and owner
        const [user, setuser] = useCookies(['username'])
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const selected = useRef('Priority')
        const userID = user['username']
        const [date, setDate] = useState()
    
        const task = {
          owner : userID,
          name : title,
          description : description,
          date : date,
          priority : selected.current === 'Priority' ? ('None') : (selected.current)
        }
        //adding tasks
        const PostTask = () =>{
          APIService.PostTask(task)
          .then(resp => console.log(resp))
          .catch(error => console.log(error))
        }

        //cancel button handling:
        const CancelButtonHandling = () =>{
            props.setTrigger(false)
            setDescription('')
            setTitle('')
            selected.current="Priority"
        }

        //Confirm button Handling:
        const ConfirmButtonHandling = () =>{
            PostTask()
            props.setTrigger(false)
            setDescription('')
            setTitle('')
            selected.current="Priority"   
            window.location.reload()
        }
    
    const [open, setOpen] = useState(false)
    return (props.trigger) ? (
        <div className="AddTaskPopup" >
            <div className="AddTaskPopupInner" >
                <div className="input-container-add-tasks">
                <h1 id="add-task-h1">Add Task</h1>
                    <input type="text" className="add-task-input" placeholder="Task Title" onChange={(e)=>setTitle(e.target.value)} value={title} required/>
                    <input type="text" className="add-task-input" placeholder="Task Description" onChange={(e)=>setDescription(e.target.value)} value={description} required/>
                    <input type="date" className="add-task-input-date" onChange={e=>setDate(e.target.value)} required/>
                    <button className="dropdown-btn" onClick={()=>setOpen(!open)}>{selected.current}</button>
                    {open && <Dropdown selected={selected} open={open} setOpen={setOpen}/>}
                </div>
                <div className="buttons-container">
                    <button className="Cancel-btn" onClick={CancelButtonHandling}>Cancel</button>
                    <button className="Confirm-btn" onClick={ConfirmButtonHandling}>Confirm</button>
                </div>
            </div>
        </div>
    ) : ""
}
export default AddTask;