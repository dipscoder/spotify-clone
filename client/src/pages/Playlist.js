import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrackSearchResult from "../components/TrackSearchResult";

const useStyles = makeStyles({
    body__info: {
        display: "flex",
        alignItems: "flex-end",
        padding: "10px",

        "& img": {
            height: "20vw",
            margin: "0 20px",
            boxShadow: "0 4px 60px rgba(0,0,0,0.5)",
        }
    },

    body__infoText: {
        flex: "1",

        "& h2": {
            fontSize: "48px",
            marginBottom: "10px",
        },

        "& p": {
            fontSize: "14px",
        }
    }

});


const Playlist = ({ playlist }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.body__info}>
        <img src={playlist?.images[0].url} alt="" />

        <div className={classes.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
