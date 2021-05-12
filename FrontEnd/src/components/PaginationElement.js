import { IconButton, makeStyles, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import React from 'react'

const useStyles = makeStyles(() => ({
    horizontalBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    centerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    }
}));

export const PaginationElement = (props) => {
    const { currentPage, changePageUp, disableUp, disableDown, changePageDown } = props;
    const classes = useStyles();
    return (
        <div className={classes.horizontalBar}>
            <IconButton disabled={disableDown} onClick={() => changePageDown()}>
                <NavigateBeforeIcon color={'#3f51b5'} />
            </IconButton>
            <div className={classes.centerText}>
                <Typography>{currentPage}</Typography>
            </div>
            <IconButton disabled={disableUp} onClick={() => changePageUp()}>
                <NavigateNextIcon color={'#3f51b5'} />
            </IconButton>
        </div>
    )
}

export default PaginationElement;