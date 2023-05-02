import React, { useState, useEffect } from 'react'
import './Workouts.css'
import Nav from './Nav';
import { useRef } from 'react';
import song from './Images/song.mp3'
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import bicepCurles from './Images/bicepCurles.jpg'
import hammerCurles from './Images/hammerCurles.jpg'
import concentrationCurles from './Images/concentrationCurles.jpg'
import preacherCurles from './Images/preacherCurles.jpg'
import tricepPushDown from './Images/tricepPushdown.jpg'
import closeGripBenchPress from './Images/closebenchpress.jpg'
import Dips from './Images/Dips.jpg'
import skullCrushers from './Images/skullCrushers.jpg'
function Workout(){
    const audioRef = useRef(null);

    useEffect(() => {
      audioRef.current.play();
    }, []);
    return (
        <>
            <Nav/>
            <h2 style={{marginTop : '5%', marginLeft : '10px'}}>Biceps Exercices</h2>
            <div className='exercices-container'>
                <Card sx={{ maxWidth: 345}} id='card-element' >
                        <CardMedia
                            sx={{ height: 270 }}
                            image={bicepCurles}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Bicep Curls
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Stand with a dumbbell in each hand, palms facing forward.
                            Curl the weights towards your shoulders, then lower them back down slowly.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={hammerCurles}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Hammer Curles
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Stand with a dumbbell in each hand, palms facing forward.
                            Curl the weights towards your shoulders, then lower them back down slowly.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={concentrationCurles}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Concentration Curles
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Sit on a bench and hold a dumbbell in one hand, with your elbow resting on the inside of your thigh. 
                            Curl the weight towards your shoulder, then lower it back down slowly.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={preacherCurles}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Preacher Curles
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Sit on a preacher bench and hold a barbell with an underhand grip.
                            Curl the weight towards your shoulders, then lower it back down slowly.
                            </Typography>
                        </CardContent>
                </Card>
            </div>

            <h2 style={{marginTop : '30px', marginLeft : '10px'}}>Triceps Exercices</h2>
            <div className='exercices-container'>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={tricepPushDown}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Tricep Push Downs
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Attach a straight bar or a rope to the cable machine and stand facing it. Grab the bar or rope with an overhand grip,
                            and bring it down towards your thighs, keeping your elbows close to your sides.
                            Slowly extend your arms down until your arms are fully extended, and then return to the starting position.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={closeGripBenchPress}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Close Grip Bench Press
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lie flat on a bench with your feet firmly planted on the ground. 
                            Grasp the bar with a close grip (hands about shoulder-width apart) 
                            and slowly lower the bar towards your chest. Pause briefly, then press the bar back up to the starting position.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={Dips}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Dips
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Using parallel bars or a dip machine, place your hands on the bars and straighten your arms. 
                            Lower your body until your elbows are at a 90-degree angle, then push back up to the starting position.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345}} id='card-element'>
                        <CardMedia
                            sx={{ height: 270 }}
                            image={skullCrushers}
                            title="Volunteering"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Skull Crushers
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lie flat on a bench with a weight bar or dumbbells in your hands.
                             Extend your arms so that the weight is directly above your forehead. Slowly lower the weight down towards your forehead, keeping your elbows fixed in place.
                             Pause briefly, then lift the weight back up to the starting position.
                            </Typography>
                        </CardContent>
                </Card>
            </div>
            <audio ref={audioRef} src={song} loop />
        </>
    );
}

export default Workout;