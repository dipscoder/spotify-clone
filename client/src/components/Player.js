import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SpotifyPlayer from "react-spotify-web-playback";

const useStyles = makeStyles({
  footer : {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    bottom: "0",
    height: "65px",
    width: "100%",
    // backgroundColor: "#282828",
    // padding: "20px",
  },
});

const Player = ({ accessToken, trackUri }) => {
  const classes = useStyles();

  if (!accessToken) return null;
  return (
    <div className={classes.footer}>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        uris={trackUri ? [trackUri] : []}
      />
    </div>
  );
};

export default Player;
