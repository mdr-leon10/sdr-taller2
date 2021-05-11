import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography';
import TextBox from './TextBox';


const useStyles = makeStyles({
    root: {

    },
    title: {
        marginTop: "5%",
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: "0%",
        height: 75,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    },
    list: {
        margin: "2%",
        border: "none", 
        boxShadow: "none" 

    }
});

export default function RecomendationCard(props) {
    const classes = useStyles();
    var { cardTitle } = props

    return (

        <div>
            <Card className={classes.root}>

                <Card className={classes.title}>
                    <Typography >{cardTitle ? cardTitle : 'Recomendation'}</Typography>
                </Card>

                <Card className={classes.list}>
                    <div style={{ margin: "2%"}}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>
                    <div style={{ margin: "2%" }}>
                        <TextBox />
                    </div>

                </Card>

            </Card>
        </div>

    )

}