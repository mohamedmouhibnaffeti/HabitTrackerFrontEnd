import './AddHabits.css'
import React, { useState, useRef, useEffect } from "react";
import APIService from './APIService';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function AddHabits(props){
    //bad habits list to append to the api service later
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
    return (props.addhabits) ? (
        <div className="bad-habits-popup" >
            <div className='bad-habits-popup-inner-container'>
            <div className="bad-habits-popup-inner" >
                
                <div className='bad-habits-wrapper'>
                <h3>Bad Habits you want to remove</h3>
                <div className='bad-habits-group'>
                <div className='bad-habits'>
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
                    </div>

                    <div className='bad-habits'>
                        <label>
                            <div className={`bad-habit ${BadisChecked('Junk Food') ? 'checked' : ''}`}>
                                <input type='checkbox' value='Junk Food' checked={BadisChecked('Junk Food')} onChange={handleBadHabitsChange} />
                                <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-burger" />
                                <p>Junk Food</p>
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
                            <div className={`bad-habit ${BadisChecked('Excessive Sleeping') ? 'checked' : ''}`}>
                                <input type='checkbox' value='Excessive Sleeping' checked={BadisChecked('Excessive Sleeping')} onChange={handleBadHabitsChange} />
                                <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-bed" />
                                <p>Excessive Sleeping</p>
                            </div>
                        </label>
                    </div>

                </div>
                </div>




                <div className='seperator'></div>

                <div className='good-habits-wrapper'>
                <h3>Good Habits you already have</h3>
                <div className='bad-habits-group'>
                
                <div className='bad-habits'>
                    <label>
                        <div className={`bad-habit ${GoodisChecked('Walking') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Walking' checked={GoodisChecked('Walking')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-person-walking" />
                            <p>Walking</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${GoodisChecked('Exercice') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Exercice' checked={GoodisChecked('Exercice')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-dumbbell" />
                            <p>Exercice</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${GoodisChecked('Praying') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Praying' checked={GoodisChecked('Praying')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-person-praying" />
                            <p>Praying</p>
                        </div>
                    </label>
                <div/>

                <div className='bad-habits'>    
                    <label>
                        <div className={`bad-habit ${GoodisChecked('Eat Healthy') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Eat Healthy' checked={GoodisChecked('Eat Healthy')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-carrot" />
                            <p>Eat Healthy</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${GoodisChecked('Reading') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Reading' checked={GoodisChecked('Reading')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-book-open-reader" />
                            <p>Reading</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${GoodisChecked('Sleep Less') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Sleep Less' checked={GoodisChecked('Sleep Less')} onChange={handleGoodHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-bed" />
                            <p>Sleep Less</p>
                        </div>
                    </label>
                    </div>
                </div>    
            </div>
            </div>

                <div className='seperator'></div>
                
                <div className='good-habits-to-raise-wrapper'>
                <h3>Good Habits you want to raise</h3>
                <div className='bad-habits-group'>
                <div className='bad-habits'>

                    <label>
                        <div className={`bad-habit ${RaiseisChecked('Walking') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Walking' checked={RaiseisChecked('Walking')} onChange={handleRaiseHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-person-walking" />
                            <p>Walking</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${RaiseisChecked('Exercice') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Exercice' checked={RaiseisChecked('Exercice')} onChange={handleRaiseHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-dumbbell" />
                            <p>Exercice</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${RaiseisChecked('Praying') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Praying' checked={RaiseisChecked('Praying')} onChange={handleRaiseHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-person-praying" />
                            <p>Praying</p>
                        </div>
                    </label>
                </div>
                
                <div className='bad-habits'>
                    <label>
                        <div className={`bad-habit ${RaiseisChecked('Eat Healthy') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Eat Healthy' checked={RaiseisChecked('Eat Healthy')} onChange={handleRaiseHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-carrot" />
                            <p>Eat Healthy</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${RaiseisChecked('Reading') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Reading' checked={RaiseisChecked('Reading')} onChange={handleRaiseHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-book-open-reader" />
                            <p>Reading</p>
                        </div>
                    </label>

                    <label>
                        <div className={`bad-habit ${RaiseisChecked('Sleep Less') ? 'checked' : ''}`}>
                            <input type='checkbox' value='Sleep Less' checked={RaiseisChecked('Sleep Less')} onChange={handleRaiseHabitsChange} />
                            <FontAwesomeIcon id='bad-habit-icon' icon="fa-solid fa-bed" />
                            <p>Sleep Less</p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className="buttons-container">
                    <button className="Confirm-btn">Confirm</button>
                </div>
</div>
    ) : ""

}
export default AddHabits;

/* DropDown component implementation all good except the dropdown element selected text.

    const badSelected = useRef(['Bad habit'])
    const [dropdownstates, setdropdownstates] = useState([])
        const handleDropDownBadHabit = (i) =>{
            const newDropdownStates = [...dropdownstates]
            newDropdownStates[i] = !newDropdownStates[i]
            setdropdownstates(newDropdownStates)
        }
    const badhabits = ['smoking', 'drinking alcohol', 'masturbating', 'junk food', 'video games']
<button className="bad-habit-btn" onClick={()=>handleDropDownBadHabit(i)}>{badSelected.current}</button>
                            {dropdownstates[i] && (
                                <div>
                                    <div className="bad-habit-items">
                                        {badhabits.map((badhabit)=>(
                                        <p className="bad-habit-item" selected={badSelected.current} onClick={()=>{handleDropDownBadHabit(i);badSelected.current=badhabit}} >{badhabit}</p>
                                        ))}
                                    </div>
                                </div>)
                            }
*/ 

