import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 100,
        height: 100,
        borderRadius: 100,
        justifyContent: "center",
        justifyItems: "center",
        alignItems: 'center',
        alignContent: 'center',
        display: "flex",
        "&:hover": {
            backgroundColor: "rgba(63, 81, 181, 1)",
            "& p":{
                color: "white"
            }
        }
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CircleButton(props) {
    const classes = useStyles();
    var { circleText, onClickAction } = props

    return (

        <Card className={classes.root} onClick={()=> onClickAction()}>
            
                <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                  
                        <Typography>{circleText}</Typography>
                  
                </div>
            
        </Card>
    );
}