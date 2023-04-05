import './Login.css'
import APIService from './APIService'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Login(){

    //username field control... To be used later.
    const [username, setusername] = useState('')
    const handleChangeUsername = (event) =>{
        setusername(event.target.value);
        setNoUser('');
    }

    //password field control... To be used later.
    const[password, setpassword] = useState('')
    const handleChangePassword = (event) =>{
        setpassword(event.target.value)
    }

    //checking if user exists or not 
    const[noUser, setNoUser] = useState('')

    //Cookies handling
    const [token, setToken] = useCookies(['mytoken'])
    const [user, setuser] = useCookies(['username'])
    //Handling Login
    const Name = useRef('')
    const loginBtn = () =>{
        APIService.userLogin({username, password})
        .then(resp => {
            setToken('mytoken',resp.token);
            setuser('username',Name.current.value);
            if( !resp.token){
                setNoUser('username invalid')
            }
            
        })
    } 

    //Redirect after Login:
    let navigate = useNavigate()
    useEffect(()=>{
        if(token['mytoken'].length >10){
            navigate('/Home')
        }
    }, [token, navigate])
    return(
        <div className='LoginContainer'>
            <div className='LoginItems'>
                <h1 id='LoginH1'>Login</h1><br></br>
                <input id='txt' ref={Name} type='text' placeholder='Username' onChange={handleChangeUsername} value={username} required/>
                <br></br><br></br><input id='txt' type='password' onChange={handleChangePassword} value={password} placeholder='Password'/><br/>
                <span style={{color: 'red', fontSize: '15px', marginTop: '10px'}}>{noUser}</span><br/>
                <input id='btn' type='submit' onClick={loginBtn} value='Login' /><br></br><br></br>
                <p id='Logintxt'>Forgot Password?</p><br></br>
                <p id='Logintxt'><NavLink to='/Signup'>New Here? SignUp</NavLink></p>
            </div>
            <div className='LoginBox'></div>
        </div>
    );
}
export default Login;