import React, { useEffect, useRef, useState } from 'react'
import Nav from './Nav'
import TextField from '@mui/material/TextField';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import Button from '@mui/material/Button';
import './Nutrition.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import APIService from './APIService';
import ErrorImage from './Images/Animations/vecteezy_error-vector-icon-design_20092168.jpg'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(qty, unit, food, calories, weight) {
  return { qty, unit, food, calories, weight };
}


export default function Nutrition(){

    const [NutritionDataState, SetNutritionDataState] = useState(false)
    const [NutritionData, setNutritionData] = useState({}) 
    const [foodToTrack, setFoodToTrack] = useState('')
    const onAnalyseClick = async () =>{
        const response = await APIService.GetNutritionDetails(foodToTrack)
        console.log("NT",NutritionData)
        if(response.message !== "Cannot read properties of undefined (reading '0')" && response.message !== 'Request failed with status code 400' ){
            setNutritionData(response)
            SetNutritionDataState(true)
        }else{
            SetNutritionDataState(false)
        }
    }
    console.log(NutritionData)

    const rows = [
        createData(NutritionData.quantity, NutritionData.unit, NutritionData.food, NutritionData.calories + ' kcal', NutritionData.weight + ' g'),
      ];
    return (
        <>
            <Nav/>
            <div className='NutritionContainer'>
                <p style={{fontSize: '30px', fontWeight: 'bold', color: '#001d3d'}}>Track Your Nutrition <FoodBankIcon style={{transform: 'translateY(4px)'}} fontSize='34px'/></p>
                <div className='secondairy-container'>
                    <div className='food-input-container'>
                    <p style={{display: 'inline-block', textAlign: 'center'}}>Enter an ingredient list for what you are cooking, like <span style={{color:"green", fontWeight: 'bold'}}>"1 cup rice <span style={{textDecoration: 'underline'}}>or</span> 10 oz chickpeas"</span>,etc. Enter each ingredient on a new line.</p>
                    <TextField
                        id="filled-multiline-static"
                        label="Ingredient List"
                        multiline
                        rows={4}
                        variant="filled"
                        style={{width: '350px', marginTop: '20px'}}
                        onChange={(e)=>setFoodToTrack(e.target.value)}
                        value={foodToTrack}
                    />
                    <Button variant="outlined" endIcon={<TroubleshootIcon />} style={{border: '1px solid #e3a90e', color: '#e3a90e', marginTop: '25px'}} onClick={onAnalyseClick}> Analyse </Button>
                    {NutritionDataState ? <TableContainer component={Paper} style={{marginTop:'20px'}}>
                        <Table sx={{ minWidth: 450 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Qty</StyledTableCell>
                                <StyledTableCell align="center">Unit</StyledTableCell>
                                <StyledTableCell align="center">Food&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Calories&nbsp;</StyledTableCell>
                                <StyledTableCell align="center">Weight&nbsp;</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.qty}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.unit}</StyledTableCell>
                                <StyledTableCell align="center">{row.food}</StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell align="center">{row.weight}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer> : <div style={{fontSize: '18px', color: '#ff9248', fontWeight: 'bold', marginTop: '30px'}}>Please insert a valid food name <SentimentDissatisfiedIcon style={{transform: 'translateY(6px)'}}/> </div>}
                    </div>
                    <div className='nutrition-facts-container' >
                    { NutritionDataState ?  <div className='nutrition-facts'>
                            <p style={{fontSize: '22px', fontWeight: 'bold', alignSelf: 'center'}}>Nutrition Facts</p>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '5px'}}/>
                            <p style={{fontSize: '15px', fontWeight: 'bold'}}>Amount Per Serving</p>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{fontSize: '22px', fontWeight: 'bold'}}>Calories</p>
                                <p style={{fontSize: '18px', fontWeight: 'bold', transform:'translateY(5px)'}}>{NutritionData.calories}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '4px'}}/>
                            <p style={{alignSelf: 'flex-end', fontSize: '10px', fontWeight: 'bold'}}>Amount*</p>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Total Fat <span style={{fontWeight: 'normal'}}>(g)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.totalFat}</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Saturated Fat <span style={{fontWeight: 'normal'}}>(g)</span> </p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.saturatedFat}</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Trans Fat <span style={{fontWeight: 'normal'}}>(g)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.transFat}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Cholesterol <span style={{fontWeight: 'normal'}}>(mg)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.cholesterol}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Sodium <span style={{fontWeight: 'normal'}}>(mg)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.sodium}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Total Carbohydrate <span style={{fontWeight: 'normal'}}>(g)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.totalCarbohydrate}</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>	Dietary Fiber <span style={{fontWeight: 'normal'}}>(g)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.dietaryFiber}</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Total Sugars <span style={{fontWeight: 'normal'}}>(g)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.totalSugars}</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Total CO2 Emissions</p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.totalCO2Emissions}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Protein <span style={{fontWeight: 'normal'}}>(g)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.protein}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Vitamin D <span style={{fontWeight: 'normal'}}>(µg)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.vitaminD}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Calcium <span style={{fontWeight: 'normal'}}>(mg)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.calcium}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Iron <span style={{fontWeight: 'normal'}}>(mg)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.iron}</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Potassium <span style={{fontWeight: 'normal'}}>(mg)</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>{NutritionData.potassium}</p>
                            </div>
                        </div>
                        : 
                        <img src={ErrorImage} alt='' width={300} height={400} style={{marginRight: 20}} />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}