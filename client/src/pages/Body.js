import React from 'react'
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';


// Styles
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


const Body = ({accessToken}) => {
    const classes = useStyles()

    return (
        <div className={classes.body}>
            <Header accessToken={accessToken} />
            Body
        </div>
    )
}

export default Body
