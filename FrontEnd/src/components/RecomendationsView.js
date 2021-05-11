import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar'
import RecomendationCard from './RecomendationsCard';
import Circle from './Circle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({


});

export default function MainRecomendationsView(props) {
    const classes = useStyles();
    var { card1Title, card2Title, showCard2, showContextButton} = props
    
    return (

        <div>
            <NavBar />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "2%" }}>
                <div style={{ flexDirection: "column", flexGrow: "1.5" }}>
                    <div style={{ margin: "2.5%" }}>
                        <RecomendationCard cardTitle={card1Title}/>
                    </div>

                </div>

                {showCard2 && ( <div style={{ flexDirection: "column", flexGrow: "1.5" }}>
                    <div style={{ margin: "2.5%" }}>
                        <RecomendationCard cardTitle={card2Title}/>
                    </div>
                </div>)}

                <div style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flexGrow: "1" }}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "10% 0% 0% 0%" }}>
                        <Circle />
                        <div style={{ marginTop: "10%" }}>
                            {showContextButton && (<Button variant="contained" color="primary"> Primary</Button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}