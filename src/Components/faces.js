import './faces.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Faces(props){
    return(
        <div className='faces-container'>
            <FontAwesomeIcon icon="fa-solid fa-face-sad-cry" id="face" onClick={()=>{props.setFeeling('Crying');window.location.reload()}}/>
            <FontAwesomeIcon icon="fa-solid fa-face-sad-tear" id="face" onClick={()=>{props.setFeeling('Sad Tear');window.location.reload()}}/>
            <FontAwesomeIcon icon="fa-solid fa-face-frown" id="face" onClick={()=>{props.setFeeling('Sad');window.location.reload()}}/>
            <FontAwesomeIcon icon="fa-solid fa-face-meh" id="face" onClick={()=>{props.setFeeling('Meh');window.location.reload()}}/>
            <FontAwesomeIcon icon="fa-solid fa-face-smile" id="face" onClick={()=>{props.setFeeling('Smile');window.location.reload()}}/>
            <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" id="face" onClick={()=>{props.setFeeling('Greateful');window.location.reload()}}/>
            <FontAwesomeIcon icon="fa-solid fa-solid fa-face-laugh-beam" id="face" onClick={()=>{props.setFeeling('Wonderful');window.location.reload()}}/>
        </div>
    )
}
export default Faces;