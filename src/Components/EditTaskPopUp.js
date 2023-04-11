import './EditTaskPopUp.css'
import React, { useState, useRef, useEffect } from "react";
import APIService from './APIService';
import Dropdown from "./Dropdown";
import { useCookies } from 'react-cookie';
function EditTaskPopup(props){
    //task title
    const [title, setTitle] = useState('')
    //task description
    const [description, setDescription] = useState('')

    const [token, setToken] = useCookies(['mytoken'])
    const [user, setuser] = useCookies(['username'])
    const userID = user['username']

    //useState for dropdown list open or closed:
    const [open, setOpen] = useState(false)

    const selected = useRef('Priority')
    console.log(props.identifier)
    useEffect(()=>{
        if (props.identifier >= 1){
        APIService.GetTaskById(props.identifier,token['mytoken'])
        .then(resp=>{
            setTitle(resp.name);
            setDescription(resp.description);
            resp.priority === "" ? (selected.current = "Priority") : (selected.current = resp.priority)
            console.log(resp)
        })
        .catch(error => error)
        }
        console.log(EditTitle)
        console.log(Editdesc)
        console.log(props.identifier)
    })
    
    //trick to refresh:
    const [refresh, setRefresh] = useState(false)

    //Cancel Button Actions Handling:
    const CancelButtonHandling = () =>{
        props.toggleEditTask(false)
    }
    //Confirm button Actions handling:

    const ConfirmButtonHandling = () =>{
        props.toggleEditTask(false)
        EditTaskData()
        setRefresh(!refresh)
        window.location.reload();
    }

    const [EditTitle, setEditTitle] = useState('')
    const [Editdesc, setEditdesc] = useState('')
    //editing Tasks
    const taskEditing = {
        owner : userID,
        name : EditTitle,
        description : Editdesc
    }
    
    const EditTaskData = () => {
        APIService.UpdateTask(taskEditing, props.identifier, token['mytoken'])
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }
    
    return (props.editTask) ? (
        <div className="EditTaskPopup" >
            <div className="EditTaskPopupInner" >
                <div className="input-container-edit-tasks">
                <h1 id="edit-task-h1">Edit Task</h1>
                    <input type="text" className="edit-task-input" placeholder={title} onChange={(e)=>setEditTitle(e.target.value)} value={EditTitle}  />
                    <input type="text" className="edit-task-input" placeholder={description} onChange={(e)=>setEditdesc(e.target.value)} value={Editdesc}  />
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