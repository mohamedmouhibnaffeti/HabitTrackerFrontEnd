import React, {useState} from "react";
import './Relaxation.css'
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import beginner from './Images/wimhofbeginner.jpg'
import advanced from './Images/wimhof.jpg'
import anxiety from './Images/anxiety.jpg'
import concentration from './Images/concentrate.jpg'
import adho from './Images/adho.jpg'
import tree from './Images/tree.png'
import warrior from './Images/warrior.jpg'
import triangle from './Images/triangle.png'
function Relaxation(props){
    return (props.RelaxationTrigger) ? (
        <div className="relaxation-popup">
            <div className="relaxation-popup-inner">
                <div className="relaxation-header">
                    <h1 id="relaxation-title">Relaxation Techniques</h1>
                    <div className="relaxation-cross-container">
                        <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={()=>props.setRelaxationTrigger(false)}/>
                    </div>
                </div>
                <h2 id="relaxation-mini-title">Breathing Exercices</h2>
                <div className="relaxation-inner-content">
                <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        sx={{ height: 270 }}
                        image={beginner}
                        title="Volunteering"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Wim Hof breathing technique (beginner)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Find a comfortable place to sit or lie down.
                        Take 30 deep breaths.
                        Exhale fully and hold your breath for a comfortable amount of time.
                        Take a recovery breath and start another round of 30 deep breaths.
                        Repeat up to 3 rounds or until you feel calm.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={advanced}
                        title="Call an old friend"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Wim Hof breathing technique (advanced)
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Wim Hof breathing technique combines deep breathing, hyperventilation, and breath holding. It's named after Dutch athlete Wim Hof. Steps: 1) Sit/lie comfortably with eyes closed.
                        2) Take 30-40 deep, fast breaths.
                        3) Exhale, hold breath as long as possible.
                        4) Inhale deeply, hold 15-20 sec.
                        5) Repeat cycle 2-3 times.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 322 }}
                        image={anxiety}
                        title="Go out with friends"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Remove anxiety
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Find a quiet spot to sit or lie down comfortably. Take deep breaths in through your nose and slowly exhale through your mouth.
                        Focus on your breath and body sensations, allowing anxious thoughts to pass without judgment.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={concentration}
                        title="Help a random person"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Breathing for Concentration
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Use breathing to enhance concentration by finding a quiet place to sit, closing your eyes, and taking slow, deep breaths.
                        Inhale to a count of four, hold for four, and exhale for four. Focus on your breath and counting.
                        With practice, use your breath to support your concentration.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                </div>
                <h2 id="relaxation-mini-title">Yoga and Stretching Exercices</h2>
                <div className="relaxation-inner-content">
                <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        sx={{ height: 270 }}
                        image={adho}
                        title="Volunteering"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Adho mukha svanasana
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Adho mukha svanasana is a yoga posture commonly known as downward-facing dog pose.
                        It involves starting on all fours, lifting the hips up and back, straightening the legs,
                        and pressing the hands into the ground.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={tree}
                        title="Call an old friend"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Vrksasana
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Vrksasana, also known as Tree Pose, is a standing yoga posture that involves balancing 
                        on one leg while the other leg is bent and placed against the inner thigh of the standing leg.
                        The arms are typically extended above the head with palms together or separated.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={warrior}
                        title="Go out with friends"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Virabhadrasana II
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        To practice this posture, stand with your feet wide apart, turn your right foot out to a 90-degree angle,
                        and bend your right knee while lifting your arms to shoulder height.
                        Keep your gaze forward over your right hand and repeat on the other side.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 230 }}
                        image={triangle}
                        title="Help a random person"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Trikonasana
                        </Typography>
                        <Typography variant="body2" color="text.secondary">                        
                        To practice Trikonasana, start in Mountain Pose. Step your left foot back and turn it out at a 45-degree angle.
                        Extend your arms out to the sides and reach your right hand toward your right foot,
                        placing it on your shin, ankle, or the floor. Hold for 5-10 breaths and repeat on the other side.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Play</Button>
                    </CardActions>
                </Card>
                </div>
            </div>
        </div>
    )
    :
    "" 
}
export default Relaxation;
