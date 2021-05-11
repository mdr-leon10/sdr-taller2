import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextBox from './TextBox.js';
import CircleButton from './CircleButton';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        border: "none", 
        boxShadow: "none" 
    }
});

export default function UserLine(props) {
    const classes = useStyles();
    var {userName, userScore} = props
    let history = useHistory();
    const setView = (path) => history.push(path);

    return (
        <div>
            <Card  className={classes.root} >
                <CardContent>
                    <div style={{ justifyContent: "space-around", display: "flex", alignItems: "center", alignContent: "center", padding: '1% 0% 1% 0%' }}>
                        
                        <div style={{ width: "60%", flexDirection: "column", padding: '0% 2% 0% 2%'}}>
                            <TextBox leftText={userName} rightText={userScore}/>
                        </div>

                        <div style={{ width: "13%", flexDirection: "column", padding: '0% 2% 0% 2%'}}>
                            <CircleButton onClickAction={() => setView('/hybrid/' + userName)} circleText={"Hibrido"}/>
                        </div>

                        <div style={{ width: "13%", flexDirection: "column", padding: '0% 2% 0% 2%'}}>
                            <CircleButton onClickAction={() => setView('/context/'+ userName)} circleText={"Contexto"}/>
                        </div>

                        <div style={{ width: "13%", flexDirection: "column", padding: '0% 2% 0% 2%'}}>
                            <CircleButton onClickAction={() => setView('/svd/' + userName)} circleText={"SVD"}/>
                        </div>
                        
                        <div style={{ width: "13%", flexDirection: "column", padding: '0% 2% 0% 2%'}}>
                            <CircleButton onClickAction={() => setView('/online/' + userName)} circleText={"Online"}/>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    );
}