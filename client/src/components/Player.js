import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SpotifyPlayer from "react-spotify-web-playback";

const useStyles = makeStyles({
  footer: {
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

  // Read - https://www.npmjs.com/package/react-spotify-web-playback
  // Whenever trackURI changes setPlay=true, so that player start playing that song immediately without pressing the play button
  // "callback" in SpotifyPlayer holds the current state of the player, so if no song is playing we will setPlay=false
  // magnifySliderOnHover - Magnify the player's slider on hover.

const Player = ({ accessToken, trackUri }) => {
  const classes = useStyles();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true);
  }, [trackUri]);

  if (!accessToken) return null;
  return (
    <div className={classes.footer}>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => { 
          if (!state.isPlaying) setPlay(false);
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        magnifySliderOnHover={true}
        styles={{
          bgColor: '#282828',
          color: '#fff',
          sliderColor: '#1db954',
          sliderHandleColor: '#1cb954',
          trackNameColor: '#fff',
        }}
      />
    </div>
  );
};

export default Player;
