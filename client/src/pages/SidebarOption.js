import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

import SpotifyWebApi from "spotify-web-api-node";
import useAuth from '../useAuth';

const spotifyApi = new SpotifyWebApi({
    clientId: "7b215911d14245089d73d78055353cb2",
});

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

  
function SidebarOption({ title,Icon,id, accessToken }) {
    const classes = useStyles()

    const handleClick = (e)=> {
        // console.log("clicked");
        let category_id = e.target.id
        if(!accessToken) return 
        spotifyApi.setAccessToken(accessToken);

        spotifyApi.getPlaylistsForCategory(category_id, {
            country: 'IN',
            limit : 1,
            offset : 1
          }).then(data => {
              console.log(data.body);
          })
    }

    return (
        <div className={classes.sidebarOption}>
            {Icon && <Icon className={classes.sidebarOption__icon} />}
            {Icon ? <h4>{title}</h4> : <p id={id} onClick={handleClick}>{title}</p>}
        </div>
    )
}

export default SidebarOption
