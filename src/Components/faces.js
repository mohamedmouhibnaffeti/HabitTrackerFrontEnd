import './faces.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
function Faces(){
    return(
        <div className='faces-container'>
            <FontAwesomeIcon icon="fa-solid fa-face-sad-cry" id="face"/>
            <FontAwesomeIcon icon="fa-solid fa-face-sad-tear" id="face"/>
            <FontAwesomeIcon icon="fa-solid fa-face-frown" id="face" />
            <FontAwesomeIcon icon="fa-solid fa-face-meh" id="face" />
            <FontAwesomeIcon icon="fa-solid fa-face-smile" id="face" />
            <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" id="face" />
            <FontAwesomeIcon icon="fa-solid fa-solid fa-face-laugh-beam" id="face" />
        </div>
    )
}
export default Faces;