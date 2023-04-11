import './EditTaskPopUp.css'
import React, { useState, useRef, useEffect } from "react";
import APIService from './APIService';
import Dropdown from "./Dropdown";
function EditTaskPopup(props){
    //task title
    const [title, setTitle] = useState('')
    //task description
    const [description, setDescription] = useState('')

    //Cancel Button Actions Handling:
    const CancelButtonHandling = () =>{
        props.toggleEditTask(false)
    }
    //Confirm button Actions handling:
    const ConfirmButtonHandling = () =>{
        props.toggleEditTask(false)
    }
    //useState for dropdown list open or closed:
    const [open, setOpen] = useState(false)

    const selected = useRef('Priority')
    console.log(props.identifier)
    useEffect(()=>{
        APIService.GetTaskById(props.identifier)
        .then(resp=>{
            setTitle(resp.title);
            setDescription(resp.description);
            selected.current = resp.priority;
        })
        .catch(error => error)
    })

    return (props.editTask) ? (
        <div className="EditTaskPopup" >
            <div className="EditTaskPopupInner" >
                <div className="input-container-edit-tasks">
                <h1 id="edit-task-h1">Edit Task</h1>
                    <input type="text" className="edit-task-input" placeholder="Task Title" />
                    <input type="text" className="edit-task-input" placeholder="Task Description" />
                    <button className="dropdown-btn" onClick={()=>setOpen(!open)}>{selected.current}</button>
                    {open && <Dropdown selected={selected} open={open} setOpen={setOpen} />}
                </div>
                <div className="edit-buttons-container">
                    <button className="Cancel-btn" onClick={CancelButtonHandling}>Cancel</button>
                    <button className="Confirm-btn" onClick={ConfirmButtonHandling}>Confirm</button>
                </div>
            </div>
        </div>
    ) : ""

}
export default EditTaskPopup;