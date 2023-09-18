import './Login.css'
import APIService from './APIService'
import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'

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
        if(token['mytoken']){
            navigate('/Home')
        }
    }, [token, navigate])


    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return(
        <div className='LoginContainer'>
            <div className='LoginItems'>
                <p id='LoginH1' style={{color: '#001d3d', marginBottom: '20px', marginTop: '25px', fontSize: '32px', fontWeight: 'bold'}}>Login</p>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={handleChangeUsername} value={username} ref={Name} style={{width: '300px', marginTop: '20px'}} />
                <FormControl style={{width: '300px', marginTop: '20px'}} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput onChange={handleChangePassword} value={password} id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}endAdornment={
                      <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment> }
                      label="Password" />
                </FormControl>
                <span style={{color: 'red', fontSize: '15px', marginTop: '10px'}}>{noUser}</span><br/>
                <Button variant="outlined" onClick={loginBtn} style={{color: '#e3a90e', border: '#e3a90e 1px solid'}}  endIcon={<LoginIcon />}>Login</Button>
                <p id='Logintxt' style={{marginTop: '20px'}}>Forgot Password?</p>
                <p id='Logintxt' style={{marginTop: '15px'}}><NavLink to='/Signup'>Don't have an account? SignUp</NavLink></p>
            </div>
            <div className='LoginBox'></div>
        </div>
    );
}
export default Login;