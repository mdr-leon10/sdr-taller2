import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        width: 350,
        height: 350,
        borderRadius: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default function Circle() {
    const classes = useStyles();
    var circleText = "94%"

    return (

        <Card className={classes.root} >
                <Typography style={{fontSize: "2em", fontWeight: "bold"}}>{circleText}</Typography>
        </Card>
    );
}