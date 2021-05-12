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
    }
}));

export const PaginationElement = (props) => {
    const { currentPage, changePageUp, disableUp, disableDown, changePageDown } = props;
    const classes = useStyles();
    return (
        <div className={classes.horizontalBar}>
            <IconButton disabled={disableDown} onClick={() => changePageDown()}>
                <NavigateNextIcon />
            </IconButton>
            <Typography>{currentPage}</Typography>
            <IconButton disabled={disableUp} onClick={() => changePageUp()}>
                <NavigateBeforeIcon/>
            </IconButton>
        </div>
    )
}

export default PaginationElement;