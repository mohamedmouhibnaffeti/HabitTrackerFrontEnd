import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import React from 'react'
import { useCookies } from 'react-cookie'
import './Nav.css'
function Nav(){
    const NavStyles = ({isActive}) => {
        return{
            color : isActive ? '#FAE6B1' : '#31525B'
    };
    }
    const [token, setToken] = useCookies(['mytoken'])
    const [user, setuser] = useCookies(['username'])
    const navigate = useNavigate();
    return(
        <>
            <header>
                <nav>
                    <p id='Title'><b>Track-It</b></p>
                    <ul>
                        <li><div className='Item'><NavLink style={NavStyles} to='/Home'><b>Home</b></NavLink></div></li>
                        <li><div className='Item'><NavLink style={NavStyles} to='/Mental'><b>Mental Health</b></NavLink></div></li>
                        <li><div className='Item'><NavLink style={NavStyles} to='/Workouts'><b>Workouts</b></NavLink></div></li>
                        <li><div className='Item'><NavLink style={NavStyles} to='/Nutrition'><b>Calories Tracker</b></NavLink></div></li>
                        <li><div className='Item'><NavLink style={NavStyles} to='/Contact'><b>Contact</b></NavLink></div></li>
                        <li><div className='Login' onClick={()=>{setToken('mytoken', ''); setuser('username','');navigate('/')}}><b>Logout</b></div></li>
                    </ul>
                    <div className='Lines'>
                            <div className='Line'></div>
                            <div className='Line'></div>
                            <div className='Line'></div>
                    </div>
                </nav>
            </header>
        </>
    );
}
export default Nav;