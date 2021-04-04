import React, { useContext } from "react";
import useAuth from "../useAuth";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Player from "../components/Player";
import { PlayTrackContext } from "../PlayTrackContext";

const useStyles = makeStyles({
  dashboard__body: {
    display: "flex",
  },
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const classes = useStyles();
  const [playingTrack, setPlayingTrack] = useContext(PlayTrackContext)
  return (
    <div>
      <div className={classes.dashboard__body}>
        <Sidebar />
        <Body accessToken={accessToken} />
      </div>
      <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
    </div>
  );
};

export default Dashboard;
