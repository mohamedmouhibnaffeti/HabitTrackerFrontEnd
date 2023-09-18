import React from 'react'
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

const rows = [
  createData(1, 'Cup', 'rice', '702 kcal', '195 g'),
];

export default function Nutrition(){
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
                    />
                    <Button variant="outlined" endIcon={<TroubleshootIcon />} style={{border: '1px solid #e3a90e', color: '#e3a90e', marginTop: '25px'}}> Analyse </Button>
                    <TableContainer component={Paper} style={{marginTop:'20px'}}>
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
                    </TableContainer>
                    </div>
                    <div className='nutrition-facts-container'>
                        <div className='nutrition-facts'>
                            <p style={{fontSize: '22px', fontWeight: 'bold', alignSelf: 'center'}}>Nutrition Facts</p>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '5px'}}/>
                            <p style={{fontSize: '15px', fontWeight: 'bold'}}>Amount Per Serving</p>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{fontSize: '22px', fontWeight: 'bold'}}>Calories</p>
                                <p style={{fontSize: '18px', fontWeight: 'bold', transform:'translateY(5px)'}}>1270</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '4px'}}/>
                            <p style={{alignSelf: 'flex-end', fontSize: '10px', fontWeight: 'bold'}}>% Daily Value*</p>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Total Fat <span style={{fontWeight: 'normal'}}>18.3 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>28%</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Saturated Fat <span style={{fontWeight: 'normal'}}>3 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>10%</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Trans Fat <span style={{fontWeight: 'normal'}}>0 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}></p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Cholesterol <span style={{fontWeight: 'normal'}}>0 mg</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>0%</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Sodium <span style={{fontWeight: 'normal'}}>70 mg</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>3%</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Total Carbohydrate <span style={{fontWeight: 'normal'}}>333.2 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>111%</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>	Dietary Fiber <span style={{fontWeight: 'normal'}}>34.6 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>138%</p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Total Sugars <span style={{fontWeight: 'normal'}}>30.3 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}></p>
                            </div>
                            <hr style={{width: '90%', backgroundColor: 'black', height: '1px', alignSelf: 'center'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Includes- Added Sugars <span style={{fontWeight: 'normal'}}></span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}></p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between'}}>
                                <p style={{fontWeight: 'bold', fontSize:'15px'}}>Protein <span style={{fontWeight: 'normal'}}>71 g</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>142%</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Vitamin D <span style={{fontWeight: 'normal'}}>0 µg</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>0%</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Calcium <span style={{fontWeight: 'normal'}}>179.7 mg</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>18%</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Iron <span style={{fontWeight: 'normal'}}>13.8 mg</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>77%</p>
                            </div>
                            <hr style={{width: '100%', backgroundColor: 'black', height: '1px'}}/>
                            <div style={{display: 'flex', justifyContent:'space-between', marginLeft:'20px'}}>
                                <p style={{fontWeight: 'normal', fontSize:'15px'}}>Potassium <span style={{fontWeight: 'normal'}}>2203.2 mg</span></p>
                                <p style={{fontWeight:'bold', fontSize:'15px', transform:'traslateY(6px)'}}>47%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}