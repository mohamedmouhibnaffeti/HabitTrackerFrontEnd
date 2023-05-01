import React, {useState} from "react";
import './Sleep.css'
import SleepChart from "./SleepChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from "@mui/x-date-pickers";
function Sleep(props){
    const [addTrigger, setAddTrigger] = useState(false)
    function createSleepData (day, TimeOfSleep, WakeUpTime, SleepDuration){
        return {day, TimeOfSleep, WakeUpTime, SleepDuration}
    }
    const rows = [
        createSleepData('Monday', 159, 6.0, 24),
        createSleepData('Tuesday', 237, 9.0, 37),
        createSleepData('Wednesday', 262, 16.0, 24),
        createSleepData('Thursday', 305, 3.7, 67),
        createSleepData('Friday', 356, 16.0, 49),
        createSleepData('Saturday', 356, 16.0, 49),
        createSleepData('Sunday', 356, 16.0, 49),
      ];
    return (props.SleepTrigger) ? (
        <div className="sleep-popup">
            <div className="sleep-popup-inner">
                <div className="header-sleep-container">
                <h1 id="sleep-txt">Daily Sleep Tracker</h1>
                    <div className="cross-container">
                        <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={()=>props.setSleepTrigger(false)}/>
                    </div>
                </div>
                {addTrigger === false && <div id="sleep-entry" onClick={()=>setAddTrigger(true)}><FontAwesomeIcon icon="fa-solid fa-plus"/>    New Entry</div>}
                <div className="input-container-sleep">
                    <SleepChart/>
                    {addTrigger === false ? 
                    <TableContainer component={Paper} style={{ width : '607px', padding : '3px 3px'}} >
                    <Table style={{ width : '600px' }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight : 'bold'}}>Sleep Stats</TableCell>
                                <TableCell align="right" style={{fontWeight : 'bold'}}>Time of sleep</TableCell>
                                <TableCell align="right" style={{fontWeight : 'bold'}}>Wake up time&nbsp;</TableCell>
                                <TableCell align="right" style={{fontWeight : 'bold'}}>Sleep duration&nbsp;</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody style={{borderRadius : '7px'}}>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.day}
                                    </TableCell>
                                    <TableCell style={{backgroundColor : 'rgba(135, 214, 232, 0.23)'}} align="center">{row.TimeOfSleep}</TableCell>
                                    <TableCell style={{backgroundColor : 'rgba(135, 214, 232, 0.23)'}} align="center">{row.WakeUpTime}</TableCell>
                                    <TableCell style={{backgroundColor : 'rgba(135, 214, 232, 0.23)'}} align="center">{row.SleepDuration}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            :
            <div className="new-sleep-entry">
                <h2 id="sleep-entry-txt">New Sleep Entry</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker',]}>
                        <DemoItem>
                            <DatePicker label="Select Date" />
                        </DemoItem>
                        <DemoItem>
                            <TimePicker label="Select Sleep Time" defaultValue={dayjs('2022-04-17T15:30')} />
                        </DemoItem>
                        <DemoItem>
                            <TimePicker label="Select Wake up Time" defaultValue={dayjs('2022-04-17T15:30')} />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
                <div className="sleep-buttons-container">
                    <button id="sleep-btn">Reset</button>
                    <button id="sleep-btn" onClick={()=>setAddTrigger(false)}>Cancel</button>
                    <button id="sleep-btn">Submit</button>
                </div>
            </div> 
            } 
                </div>
            </div>
        </div>
    )
    :
    "" 
}
export default Sleep
