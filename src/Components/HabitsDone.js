import './HabitsDone.css'
import React, { useState, useRef, useEffect } from "react";
import APIService from './APIService';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function HabitsDone(props){
        //bad habits list to append to the api service later
        const [user, setuser] = useCookies(['username'])
        const username = user['username']
        const [badHabitValues, setBadHabitValues] = useState([])
        const handleBadHabitsChange = (e) =>{
            const val = e.target.value
            if(e.target.checked){
                setBadHabitValues([...badHabitValues, val])
            }
            else{
                setBadHabitValues(badHabitValues.filter((value)=>value !== val))
            }
            
        }
        const BadisChecked = (value) => {
            return badHabitValues.includes(value);
        }
    
        //Good habits list to append to the api service later
        const [GoodHabitValues, setGoodHabitValues] = useState([])
        const handleGoodHabitsChange = (e) =>{
            const val = e.target.value
            if(e.target.checked){
                setGoodHabitValues([...GoodHabitValues, val])
            }
            else{
                setGoodHabitValues(GoodHabitValues.filter((value)=>value !== val))
            }
            
        }
        const GoodisChecked = (value) => {
            return GoodHabitValues.includes(value);
        }
        
        //Good habits to raise list to append to the api service later
        const [RaiseHabitValues, setRaiseHabitValues] = useState([])
        const handleRaiseHabitsChange = (e) =>{
            const val = e.target.value
            if(e.target.checked){
                setRaiseHabitValues([...RaiseHabitValues, val])
            }
            else{
                setRaiseHabitValues(RaiseHabitValues.filter((value)=>value !== val))
            }
            
        }
        const RaiseisChecked = (value) => {
            return RaiseHabitValues.includes(value);
        }
    return (props.DoneTrigger) ? (
        <div className="habits-done-popup" >
            <div className="habits-done-popup-inner" >
                <div className='habits-done-header'>
                    <h1 className='habits-done-title'>Habits you've done Today</h1>
                    <div className="habits-done-cross-container">
                            <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={()=>props.setDoneTrigger(false)}/>
                    </div>
                </div>
                <div className='habits-done-container'>
                <label>
                            <div className={`bad-habit ${BadisChecked('Smoking') ? 'checked' : ''}`}>
                                <input type='checkbox' value='Smoking' checked={BadisChecked('Smoking')} onChange={handleBadHabitsChange} />
                                <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-smoking" />
                                <p>Smoking</p>
                            </div>
                        </label>
                        <label>
                            <div className={`bad-habit ${BadisChecked('Drinking Alcohol') ? 'checked' : ''}`}>
                                <input type='checkbox' value='Drinking Alcohol' checked={BadisChecked('Drinking Alcohol')} onChange={handleBadHabitsChange} />
                                <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-beer-mug-empty" />
                                <p>Drinking</p>
                            </div>
                        </label>
                        <label>
                            <div className={`bad-habit ${BadisChecked('Social Media') ? 'checked' : ''}`}>
                                <input type='checkbox' value='Social Media' checked={BadisChecked('Social Media')} onChange={handleBadHabitsChange} />
                                <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-mobile-screen" />
                                <p>Social Media</p>
                            </div>
                        </label>
                        <label>
                            <div className={`bad-habit ${BadisChecked('Video Games') ? 'checked' : ''}`}>
                                <input type='checkbox' value='Video Games' checked={BadisChecked('Video Games')} onChange={handleBadHabitsChange} />
                                <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-gamepad" />
                                <p>Video Games</p>
                            </div>
                        </label>
                    <label>
                        <div className={`bad-habit ${GoodisChecked('Walking') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Walking' checked={GoodisChecked('Walking')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-person-walking" />
                            <p>Walking</p>
                        </div>
                    </label>
                    <label>
                        <div className={`bad-habit ${GoodisChecked('Praying') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Praying' checked={GoodisChecked('Praying')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-person-praying" />
                            <p>Praying</p>
                        </div>
                    </label> 
                    <label>
                        <div className={`bad-habit ${GoodisChecked('Reading') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Reading' checked={GoodisChecked('Reading')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-book-open-reader" />
                            <p>Reading</p>
                        </div>
                    </label>
                </div>
                <div className="habits-done-buttons-container">
                    <button className="Confirm-btn">Confirm</button>
                </div>
        </div>
        </div>
    ) : ""

}
export default HabitsDone;
