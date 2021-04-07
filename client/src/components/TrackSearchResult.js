import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PlayTrackContext } from "../context/PlayTrackContext";
import { LyricsContext } from "../context/LyricsContext";
import { PlaylistContext } from "../context/PlaylistContext";

const useStyles = makeStyles({
    songRow : {
        marginLeft: "20px",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        color: "white",

        '&:hover' : {
            cursor: "pointer",
            backgroundColor: "black",
            opacity: 0.8,
        }
    },

    songRow__info : {
        marginLeft : "20px",

        '& h1': {
            fontSize : "16px",
        },

        '& p': {
            fontSize: "14px",
            marginTop: "3px",
            color: "gray",
        },
    },

    songRow__album : {
        height: "40px",
        width: "40px",
    },

});

const TrackSearchResult = ({ track, setSearch }) => {
  const classes = useStyles()  
  const [playingTrack, setPlayingTrack] = useContext(PlayTrackContext)
  const [lyrics,setLyrics] = useContext(LyricsContext)
  const [playlist, setPlaylist] = useContext(PlaylistContext)

  function handleClick() {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
    setPlaylist(null)
  }
  return (
    <div className={classes.songRow} onClick={handleClick}>
      <img className={classes.songRow__album} src={track.albumUrl} alt="" />
      <div className={classes.songRow__info}>
        <h1>{track.title}</h1>
        <p>
          {track.artist}
        </p>
      </div>
    </div>
  );
};

export default TrackSearchResult;
