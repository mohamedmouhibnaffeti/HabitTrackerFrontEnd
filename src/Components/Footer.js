import './Footer.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Foot(){
    return(
        <>
        <footer>
            <span className="text-muted">All rights reserved 2023 @ Mohamed Mouhib Naffeti</span>          
            <hr></hr>
            <div className='lg'>
            <a href="https://www.facebook.com" className='h3'><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a href="https://linkedin.com" className='h4'><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            <a href="https://instagram.com" className='h5'><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://github.com" className='h6'><i className="fa fa-github-square" aria-hidden="true"></i></a>
            </div>
        </footer>
        </>
    );
}
export default Foot;