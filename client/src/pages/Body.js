import React from 'react'
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles({
    body : {
        height: "100vh",
        flex: 0.8,
        color: "white",
        background: "linear-gradient(rgb(91, 87, 115), rgba(0,0,0,1))",
        padding: "30px",
        overflowY: "overlay",

        '& ::-webkit-scrollbar' : {
            display : "none"
        }
    },
    // .body::-webkit-scrollbar {
    //     display: none;
    // }
})


const Body = () => {
    const classes = useStyles()

    return (
        <div className={classes.body}>
            <Header />
            Body
        </div>
    )
}

export default Body
