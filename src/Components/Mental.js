import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import './Mental.css'
import Faces from './faces';
import APIService from './APIService';
import AddHabits from './AddHabits';
import { useCookies } from 'react-cookie';
function Mental(){
    const [token, setToken] = useCookies(['mytoken'])
    const [GoodHabits, setGoodHabits] = useState([])
    const [BadHabits, setBadHabits] = useState([])
    useEffect(()=>{
        APIService.GetGoodHabits(token['mytoken'])
        .then(resp => setGoodHabits(resp))
        .catch(error => error)
        APIService.GetBadHabits(token['mytoken'])
        .then(resp => setBadHabits(resp))
        .catch(error => error)   
        console.log("Good length : ",GoodHabits.length)
        console.log("Bad length : ",BadHabits.length)
    }, [])
    return(
    <>
        <Nav/>
        <div className='mental-container'>
            <div className='feeling-container'>
                <p id='feeling-question-text'>How are you feeling now?</p>
                <Faces/>
            </div>
        </div>
        {<AddHabits addhabits={GoodHabits && BadHabits}/>}

        <div className='all-habits'>
            <div className='bad-habits'>
                <p>What bad habits do you have?</p>
            <div>
        </div>
            </div>
            <div className='good-habits'>
            <p>What good habits do you want to raise?</p>
            </div>
            <div className='today-done'>
            <p>What did you do today?</p>
            </div>
        </div>
    </>);
}
export default Mental;