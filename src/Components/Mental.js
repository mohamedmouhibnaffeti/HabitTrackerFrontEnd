import React, { useState, useEffect } from 'react'
import Nav from './Nav';
import './Mental.css'
import Faces from './faces';
import APIService from './APIService';
import AddHabits from './AddHabits';
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FeelingsChart from './FeelingChart';
import HabitsDone from './HabitsDone'
import Social from './SocialConnections'
import Sleep from './Sleep'
import Relaxation from './Relaxation'
import { Box } from '@mui/material';
function Mental(){
    const [Moods, setMoods] = useState([])
    const [Feeling, setFeeling] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [user, setuser] = useCookies(['username'])
    const username = user['username']
    const [GoodHabits, setGoodHabits] = useState([])
    const [BadHabits, setBadHabits] = useState([])
    const [HabitsToRaise, setHabitsToRaise] = useState([])
    const [Habitopen, setHabitOpen] = useState(null)
    const [habitsDone, setHabitsDone] = useState([])
    //bech nstori feha l tasks related to a certain username...
    let usernameHabits = []
    useEffect(() => {
        Promise.all([
          APIService.GetGoodHabits(token['mytoken']),
          APIService.GetBadHabits(token['mytoken']),
          APIService.GetHabitsToRaise(token['mytoken']),
          APIService.GetFeeling(token['mytoken']),
          APIService.GetHabitsDone(token['mytoken'])
        ])
        .then(([goodHabits, badHabits, habitsToRaise, moods, HabitsDone]) => {
          setGoodHabits(goodHabits);
          setBadHabits(badHabits);
          setHabitsToRaise(habitsToRaise);
          setMoods(moods);
          setHabitsDone(HabitsDone);
          
          if(GoodHabits.length > 0){  
            const usernameHabits = goodHabits.filter(habit => habit.owner === username);
            if(usernameHabits.length > 0 ){
              setHabitOpen(false)
            }
            else{
              setHabitOpen(true)
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
      }, [token['mytoken'], username]);
      
    useEffect(()=>{
        const Now = new Date()
        const feelingsMap = {
          'Crying': 1,
          'Sad Tear': 2,
          'Sad': 3,
          'Meh': 4,
          'Smile' : 5,
          'Greateful' : 6,
          'Wonderful' : 7
        }
        const Mood = {
            owner : username,
            name : Feeling,
            date : Now,
            score : feelingsMap[Feeling] || 0
        }
        APIService.PostFeeling(Mood)
    }, [Feeling])

      // function to calculate the correlation between mood and habits
      const calculateCorrelation = () => {
        //add the score attribut to the models and start working from there
        let moodData = []
        Moods.map((mood)=>{
          moodData.push(mood.score)
        })
        let habitData = []
        habitsDone.map((habitdone)=>{
          habitData.push(habitdone.score)
        })
        if (habitData.length === 0) {
          return "No habit data found.";
        }
      
        const correlationCoefficient = calculatePearsonCorrelation(moodData, habitData);
      
        if (correlationCoefficient > 0) {
          return `Your habits have a positive effect on your mood. The correlation coefficient is ${correlationCoefficient}.`;
        } else if (correlationCoefficient < 0) {
          return `Your habits have a negative effect on your mood. The correlation coefficient is ${correlationCoefficient}.`;
        } else {
          return `Your habits don't seem to have much effect on your mood. The correlation coefficient is ${correlationCoefficient}.`;
        }
      };  
      

  // function to calculate Pearson's correlation coefficient
    const calculatePearsonCorrelation = (x, y) => {
    const n = x.length;
    const meanX = x.reduce((total, value) => total + value, 0) / n;
    const meanY = y.reduce((total, value) => total + value, 0) / n;
    const covariance = x.reduce((total, value, index) => total + (value - meanX) * (y[index] - meanY), 0);
    const stdDevX = Math.sqrt(x.reduce((total, value) => total + Math.pow(value - meanX, 2), 0) / n);
    const stdDevY = Math.sqrt(y.reduce((total, value) => total + Math.pow(value - meanY, 2), 0) / n);
    const correlationCoefficient = covariance / (stdDevX * stdDevY);
    return correlationCoefficient;
  }

  const [SleepTrigger, setSleepTrigger] = useState(false)
  const [DoneTrigger, setDoneTrigger] = useState(false)
  const [SocialTrigger, setSocialTrigger] = useState(false)
  const [RelaxationTrigger, setRelaxationTrigger] = useState(false)
  const PearsonStyles = () =>{
    return{
      backgroundColor : 
      calculatePearsonCorrelation > 0 ? 'rgba(202, 147, 79, 0.787)' : 
      calculatePearsonCorrelation < 0 ? 'rgba(147, 154, 155, 0.622)' : 
      calculatePearsonCorrelation === 0 ? 'rgba(154, 127, 93, 0.787)' : "" 
    }
  }
    return(
    <>
        <Nav/>
        <div className='mental-container'>
            <div className='feeling-container'>
                <p id='feeling-question-text'>How are you feeling now?</p>
                <Faces setFeeling={setFeeling} Feeling={Feeling}/>
            </div>
           <div className="trigger-container">
                <div className="trigger">
                    <p>Sleep Tracking</p>
                    <FontAwesomeIcon id='arrow' icon="fa-solid fa-arrow-right-long" onClick={()=>setSleepTrigger(true)} />
                </div>
                <div className="trigger">
                    <p>What did you do today?</p>
                    <FontAwesomeIcon id='arrow' icon="fa-solid fa-arrow-right-long" onClick={()=>setDoneTrigger(true)} />
                </div>
            </div>
            <div className='trigger-container'>
                <div className="trigger">
                    <p>Social connections</p>
                    <FontAwesomeIcon id='arrow' icon="fa-solid fa-arrow-right-long" onClick={()=>setSocialTrigger(true)} />
                </div>
                <div className="trigger">
                    <p>Relaxation techniques</p>
                    <FontAwesomeIcon id='arrow' icon="fa-solid fa-arrow-right-long" onClick={()=>setRelaxationTrigger(true)} />
                </div>
            </div>
            <div className="pearson" style={PearsonStyles()}>
              <p>{GoodHabits.length > 0 && calculateCorrelation()}</p>
            </div>
            <Box
              sx={{
                width: 400,
                height: 200,
                backgroundColor: 'primary.dark',
                marginLeft: 68,
                borderRadius: 3,
                marginTop: 2,
                textAlign: 'center',
                opacity: [0.6],
                padding: 5,
              }}
            >
              <p style={{fontWeight: 'bold', fontFamily:'Montserrat', fontSize: '20pxy'}}>"Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."</p>
              <p>- Christian D. Larson</p>
            </Box>
            <FeelingsChart/>
        </div>
        {Habitopen === true && <AddHabits Habitopen={Habitopen} setHabitOpen={setHabitOpen} />}
        {SleepTrigger === true && <Sleep SleepTrigger={SleepTrigger} setSleepTrigger={setSleepTrigger}/>}
        {DoneTrigger === true && <HabitsDone DoneTrigger={DoneTrigger} setDoneTrigger={setDoneTrigger}/>}
        {SocialTrigger === true && <Social SocialTrigger={SocialTrigger} setSocialTrigger={setSocialTrigger}/>}
        {RelaxationTrigger === true && <Relaxation RelaxationTrigger={RelaxationTrigger} setRelaxationTrigger={setRelaxationTrigger}/> }
    </>);
}
export default Mental;