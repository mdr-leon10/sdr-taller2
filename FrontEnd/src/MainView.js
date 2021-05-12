import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NavBar from './components/NavBar'
import UserLine from './components/UserLine';
import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;
var startWindow = 0;
var endWindow = startWindow + 50;
const useStyles = makeStyles({
    root: {
        margin: "5%"

    }
});

export default function MainView(props) {
    const classes = useStyles();
    const [state, setState] = useState({});
    useEffect(() => {
        axios.get(url + '/', {
            params: {
              min: startWindow,
              max: endWindow,
            }
          })
        .then(response => {
            console.log(response)
            const data = response.data
            setState({data})
        })
    }, [])

    return (
        <div>
            <div><NavBar /></div>
            <Card className={classes.root}>
                <CardContent> 
                    {state.data && state.data.map(user => <UserLine key = {user.user} userName={user.user} userScore={user.apr_average}/>)}                   
                </CardContent>
            </Card>
        </div>
    )
}