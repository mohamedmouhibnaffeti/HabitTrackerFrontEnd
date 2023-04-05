import React from "react";
import './AddTaskPopup.css'
function AddTask(props) {
    return (props.trigger) ? (
        <div className="AddTaskPopup" >
            <div className="AddTaskPopupInner" >
                <h1 className="Taskstxt">Tasks Are Here</h1>
                <button className="Cancel-btn" onClick={()=>{ props.setTrigger(false)}}>Cancel</button>
                <button className="Confirm-btn">Confirm</button>
                
            </div>
        </div>
    ) : ""
}
export default AddTask;