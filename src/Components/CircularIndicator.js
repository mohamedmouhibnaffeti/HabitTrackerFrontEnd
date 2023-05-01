import React from "react";
import './CircularIndicator.css'
function CircularIndicator(){
    return (
        <div className="circular-container">
      <svg className="circular-svg" viewBox="0 0 50 50">
        <circle className="circular-path" cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
      </svg>
    </div>
    )
}
export default CircularIndicator;