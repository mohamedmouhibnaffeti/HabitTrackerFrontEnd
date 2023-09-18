import React, {useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import APIService from './APIService';
import './Signup.css'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';

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
    const [passwodsequal, setpasswordsequal] = useState(true)
    const [passworderror, setpassworderror] = useState('')
    const handleconfirmpassword = (event) =>{
        setconsfirmpassword(event.target.value);
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
    }



    
    let navigate = useNavigate()
    const SignupAction = () =>{
        var message = '';
        if (username === '' || username === undefined){
            message+='username should not be empty\n'
        }
        if (email === '' || email === undefined){
            message+='Email adress should not be empty\n'
        }
        else if (email.length<10){
            if(email.indexOf('@')===-1){
                message+='Email adress is invalid.\n'
            }
            message+='Email adress is invalid, it should be of the length of 11 minimum\n'
        }
        if (password === '' || password === undefined){
            message+='password should not be empty\n'
        }
        else if (password.length < 5){
            message+='password too short\n'
        }
        if (consfirmpassword === '' || consfirmpassword === undefined){
            message+='confirm password should not be empty\n'
        }
        else if (consfirmpassword.length < 5){
            message+='confirm password too short\n'
        }
        if(consfirmpassword !== undefined && password !== undefined && consfirmpassword !== password ){
            message+='confirm password and password should not be different\n'
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


    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => { event.preventDefault();}
    //---------------------------------Confirm passwd
    const [showPassword1, setShowPassword1] = React.useState(false);

    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

    const handleMouseDownPassword1 = (event) => { event.preventDefault();}
    
    return(
    <>
        <div className='SignupContainer'>
            <p id='SignupH1' style={{marginTop: '15px', marginBottom: '10px', color: '#07294e', fontWeight: 'bold', fontSize: '32px'}}>Create Account</p>
            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleName} value={username} required ref={useName} style={{width: '300px', marginTop: '20px'}} />
            <TextField id="outlined-basic" label="Email Adress" variant="outlined" ref={useEmail} onChange={handleEmail} value={email} required style={{width: '300px', marginTop: '20px'}} />
            <FormControl style={{width: '300px', marginTop: '20px'}} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput ref={usePassword} onChange={handlepassword} value={password} required id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment> }
                      label="Password" />
            </FormControl>
            <FormControl style={{width: '300px', marginTop: '20px'}} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm</InputLabel>
                  <OutlinedInput ref={useConfirmPassword} onChange={handleconfirmpassword} value={consfirmpassword} required id="outlined-adornment-password" type={showPassword1 ? 'text' : 'password'}endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword1} onMouseDown={handleMouseDownPassword1} edge="end">
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment> }
                      label="Password" />
            </FormControl>
            <Button variant="outlined" endIcon={<AccountBoxOutlinedIcon /> } onClick={SignupAction} style={{marginTop: '20px', color: '#e3a90e', border: '#e3a90e 1px solid'}} > Signup </Button>
            <p id='Signuptxt'><NavLink to='/'>Have an Account? Login</NavLink></p>
        </div>
    </>
    );
}
export default Signup;