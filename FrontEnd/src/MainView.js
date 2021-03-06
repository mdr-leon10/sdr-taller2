import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NavBar from './components/NavBar'
import UserLine from './components/UserLine';
import axios from 'axios';
import PaginationElement from './components/PaginationElement';
import { useHistory, useParams } from 'react-router';

const url = process.env.REACT_APP_BASE_URL;
const windowSize = 50
const useStyles = makeStyles({
    root: {
        margin: "1% 5%"

    }
});

export default function MainView(props) {
    const classes = useStyles();
    const [state, setState] = useState({});
    let { page } = useParams();
    page = parseInt(page);
    if (page > 7) {
        page = 7;
    }
    if (page < 1) {
        page = 1
    }
    let history = useHistory();
    useEffect(() => {
        axios.get(url + '/', {
            params: {
              min: (page-1)*windowSize,
              max: page*windowSize,
            }
          })
        .then(response => {
            console.log(response)
            const data = response.data
            setState({data})
        })
    }, [page])

    return (
        <div>
            <div><NavBar /></div>
            <PaginationElement 
                currentPage={page}
                disableDown={page <= 1}
                disableUp={page >= 7}
                changePageUp={() => {
                    let newPage = page+1
                    history.push(`/${(newPage)}`)
                }}
                changePageDown={() => {
                    let newPage = page-1
                    history.push(`/${(newPage)}`)
                }}
            />
            <Card className={classes.root}>
                <CardContent> 
                    {state.data && state.data.map(user => <UserLine key = {user.user} userName={user.user} userScore={user.apr_average}/>)}                   
                </CardContent>
            </Card>
            <PaginationElement 
                currentPage={page}
                disableDown={page <= 1}
                disableUp={page >= 7}
                changePageUp={() => {
                    let newPage = page+1
                    history.push(`/${(newPage)}`)
                }}
                changePageDown={() => {
                    let newPage = page-1
                    history.push(`/${(newPage)}`)
                }}
            />
        </div>
    )
}