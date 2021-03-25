import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

const useStyles = makeStyles({
  sidebar: {
    height: "100vh",
    flex: 0.2,
    backgroundColor: "#040404",
    color: "white",
    minWidth: "230px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  sidebar__logo: {
    height: "70px",
    padding: "10px",
    marginRight: "auto",
  }
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <br />
      <hr />
    </div>
  );
};

export default Sidebar;
