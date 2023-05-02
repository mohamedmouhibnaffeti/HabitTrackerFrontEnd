import React, {useState} from "react";
import './SocialConnections.css'
import Card from '@mui/material/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import call from './Images/call.jpg'
import out from './Images/GoOut.jpg'
import volunteer from './Images/volunteer.jpg'
import help from './Images/help.jpg'
function SocialConnections(props){
    return (props.SocialTrigger) ? (
        <div className="social-popup">
            <div className="social-popup-inner">
                <div className="social-header">
                    <h1 id="social-title">Ways to socialize</h1>
                    <div className="social-cross-container">
                        <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={()=>props.setSocialTrigger(false)}/>
                    </div>
                </div>
                <div className="social-inner-content">
                <Card sx={{ maxWidth: 345}}>
                    <CardMedia
                        sx={{ height: 270 }}
                        image={volunteer}
                        title="Volunteering"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Volunteering
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Volunteer mentors offer guidance and support to underprivileged youth by meeting with them regularly either in-person or virtually.
                        They provide encouragement,
                        advice, and help with schoolwork or career aspirations.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={call}
                        title="Call an old friend"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Call an old friend
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        An old friend is someone you have known for a long time and with whom you have shared experiences and memories.
                        Reconnecting with an old friend can be heartwarming and exciting,
                        and you may reminisce about old times and catch up on each other's lives.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 250 }}
                        image={out}
                        title="Go out with friends"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Go out with friends
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Going out with friends typically involves making plans with one or more individuals to spend time together outside of the home.
                        This could include going to a restaurant or bar, attending a concert or movie, going shopping, or engaging in some other social activity.
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        sx={{ height: 170 }}
                        image={help}
                        title="Help a random person"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Help a random person
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        There are various ways to extend help to strangers, even in small and simple ways.
                        Offering assistance with heavy loads or providing directions to someone who is lost can be a great help.
                        Sharing helpful information can also make a significant difference in someone's life.
                        Additionally, donating to local charities or non-profit organizations can help support communities and individuals in need. 
                        </Typography>
                    </CardContent>
                </Card>
                </div>
            </div>
        </div>
    )
    :
    "" 
}
export default SocialConnections;
