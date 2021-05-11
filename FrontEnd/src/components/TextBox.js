import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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

export default function TextBox(props) {
    const classes = useStyles();
    var {leftText, rightText} = props

    return (
        <Card className={classes.root}>

            <CardContent>

                <div style={{justifyContent: "left", display: "flex", alignItems: "left", justifyContent: "space-between", padding: '0% 2% 0% 2%'}}>
                    
                    <Typography >{leftText ? leftText : 'Maria' }</Typography>

                    <Typography >{rightText ? rightText: '94%' }</Typography>
                </div>

      </CardContent>

    </Card >
  );
}
