import { IconButton, makeStyles, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import React from 'react'

const useStyles = makeStyles(() => ({
    horizontalBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '1%',
    },
    centerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        margin: '0 15px',
        '&>p': {
            fontSize: '1.5rem',
        }
    },
    buttonColor: {
        color: '#3f51b5',
    }
}));

export const PaginationElement = (props) => {
    const { currentPage, changePageUp, disableUp, disableDown, changePageDown } = props;
    const classes = useStyles();
    return (
        <div className={classes.horizontalBar}>
            <IconButton disabled={disableDown} onClick={() => changePageDown()}>
                <NavigateBeforeIcon className={classes.buttonColor} />
            </IconButton>
            <div className={classes.centerText}>
                <Typography>{currentPage}</Typography>
            </div>
            <IconButton disabled={disableUp} onClick={() => changePageUp()}>
                <NavigateNextIcon className={classes.buttonColor} />
            </IconButton>
        </div>
    )
}

export default PaginationElement;