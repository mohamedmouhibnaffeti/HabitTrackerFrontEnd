import React from "react";
import "./Dropdown.css";
function Dropdown(props){
    //edit it later so i can pass few icons to indicate priority...
    const priorities = ["High", "Medium", "Low", "None"]
    return(
        <div>
            <div className="dropdown-items">
                {priorities.map((priority)=>(
                    <p className="dropdown-item" onClick={()=>{props.setOpen(false);props.selected.current=priority}} >{priority}</p>
                ))}
            </div>
        </div>
    );
}
export default Dropdown;