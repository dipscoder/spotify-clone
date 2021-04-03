import React from "react";
import useAuth from "../useAuth";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Player from "../components/Player";

const useStyles = makeStyles({
  dashboard__body: {
    display: "flex",
  },
});

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.dashboard__body}>
        <Sidebar />
        <Body accessToken={accessToken} />
      </div>
      <Player accessToken={accessToken} />
    </div>
  );
};

export default Dashboard;
