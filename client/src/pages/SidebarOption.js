import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    sidebarOption: {
        display: "flex",
        alignItems: "center",
        color: "grey",
        height: "40px",
        cursor: "pointer",
        transition: "200ms color ease-in",

        '&:hover' : {
            color : "white",
        }
    },
    sidebarOption__icon: {
        padding: "0 10px",
        color: "white",
        height: "40px",
        width: "40px",
    }
});

  
function SidebarOption({ title,Icon }) {
    const classes = useStyles()

    return (
        <div className={classes.sidebarOption}>
            {Icon && <Icon className={classes.sidebarOption__icon} />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
