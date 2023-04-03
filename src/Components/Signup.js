//handle passord confirmation
//handle signup -> redirect to home or login page
//


import React, {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import APIService from './APIService';
import './Signup.css'
function Signup(){
    //username actions
    const useName = useRef('')
    const [username, setname] = useState('')
    const handleName = (event) => {
        setname(event.target.value)
    }

    //email actions
    const useEmail = useRef('')
    const [email, setemail] = useState('')
    const handleEmail = (event) =>{
        setemail(event.target.value)
    }

    //password actions
    const usePassword = useRef('')
    const [password, setpassword] = useState('');
    const handlepassword = (event) => {
        setpassword(event.target.value);
    }

    //Confirm password actions
    const useConfirmPassword = useRef('')
    const [consfirmpassword, setconsfirmpassword] = useState('');
    const handleconfirmpassword = (event) =>{
        setconsfirmpassword(event.target.value);
    }

        //attempt to use useStates in checking the egality
        const [passwodsequal, setpasswordsequal] = useState(true)
        const [passworderror, setpassworderror] = useState('')
        useEffect(()=>{
            if(useConfirmPassword.current.value !== ''){
                if(usePassword.current.value === useConfirmPassword.current.value){
                    setpassworderror('')
                    setpasswordsequal(true)
                }
                else{
                    setpassworderror('password and confirm password do not match')
                    setpasswordsequal(false)
                }
            }
        })
    
    let navigate = useNavigate()
    const SignupAction = () =>{
        var message = '';
        if (useName.current.value === ''){
            message+='username should not be empty\n'
        }
        if (useEmail.current.value === ''){
            message+='Email adress should not be empty\n'
        }
        else if (useEmail.current.value.indexOf('@')===-1 && useEmail.current.value.length<10){
            message+='Email adress is invalid, it should be of the length of 11 minimum\n'
        }
        if (usePassword.current.value === ''){
            message+='password should not be empty\n'
        }
        else if (usePassword.current.value.length < 5){
            message+='password too short\n'
        }
        if (useConfirmPassword.current.value === ''){
            message+='confirm password should not be empty\n'
        }
        else if (useConfirmPassword.current.value.length < 5){
            message+='confirm password too short\n'
        }
        if(message === ''){
        APIService.Signup({username, email,password})
        //redirect to login page
        .then(navigate('/'))
        .catch(error => console.log(error))
        }
        else{
            alert(message)
        }
        



        /*APIService.Signup({username, email,password})
        .then(resp => console.log(resp))
        .catch(error => console.log(error))*/
    } 









    return(
    <>
        <div className='SignupContainer'>
            <h1 id='SignupH1'>Signup</h1><br></br>
            <input type='text' ref={useName} id='signuptxt' placeholder='Set username' onChange={handleName} value={username} required /><br></br><br></br>
            <input type='text' id='signuptxt' placeholder='Email Adress' ref={useEmail} onChange={handleEmail} value={email} required /><br></br><br></br>
            <input type='password' id='signuptxt' placeholder='Password' ref={usePassword} onChange={handlepassword} value={password} required/><br></br><br></br>
            <input type='password' id='signuptxt' placeholder='Confirm Password' ref={useConfirmPassword} onChange={handleconfirmpassword} value={consfirmpassword} required/><br></br>
            <span style={{color: 'red', fontSize: '15px'}}>{passworderror}</span><br></br>
            <input type='submit' id='signupbtn' value='Signup' onClick={SignupAction}/>
            <p id='Signuptxt'><NavLink to='/'>Have an Account? Login</NavLink></p>
        </div>
    </>
    );
}
export default Signup;