import './Profile.css'
import React from 'react'
import Nav from './Nav';
function Profile(){
    return(
    <div className='ProfileContainer'>
        <Nav/>
        <h1>Edit your profile details</h1>
        <form>
            <input type='text' placeholder=''/>
        </form>
    </div>);
}
export default Profile;