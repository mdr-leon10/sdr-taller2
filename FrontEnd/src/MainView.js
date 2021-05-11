import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NavBar from './components/NavBar'
import UserLine from './components/UserLine';

const useStyles = makeStyles({
    root: {
        margin: "5%"

    }
});

export default function MainView(props) {
    const classes = useStyles();

    return (

        <div>
            <div><NavBar /></div>
            <Card className={classes.root}>
                <CardContent>
                    <UserLine userName={"12345"} userScore={"100%"}/>
                    <UserLine userName={"23456"} userScore={"90%"}/>
                    <UserLine userName={"34567"} userScore={"80%"}/>
                    <UserLine userName={"45678"} userScore={"70%"}/>
                    <UserLine userName={"56789"} userScore={"60%"}/>
                </CardContent>
            </Card>
        </div>

    )

}