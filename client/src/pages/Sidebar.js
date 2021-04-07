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
  },

  sidebar__title: {
    marginLeft: "10px",
    padding: "5px",
    fontSize: "12px",
  },

  options: {
    "& p":{
      margin: "10px 0 0 20px",
      fontSize: "14px",
    },
    "& p:hover":{
      color:"white",
      cursor:"pointer",
    }
  }
});

const Sidebar = ({accessToken}) => {
  const classes = useStyles();
  const items =[
    {
      id: "toplists",
      name: "Top List",
    },
    {
      id: "party",
      name: "Party",
    },
    {
      id: "pop",
      name: "Pop",
    },
    {
      id: "workout",
      name: "Workout",
    },
    {
      id: "mood",
      name: "Mood",
    },
    {
      id: "bollywood",
      name: "Bollywood",
    },
    {
      id: "devotional",
      name: "Devotional",
    },
    {
      id: "student",
      name: "Student",
    },
    {
      id: "hiphop",
      name: "Hip Hop",
    },
  ]
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
      <strong className={classes.sidebar__title}>Playlist Categories</strong>
      <hr />

      <div className={classes.options}>
        {items.map((item) => (
          <SidebarOption key={item.id} accessToken={accessToken} id= {item.id} title={item.name} />
        ))}
 
      </div>
    </div>
  );
};

export default Sidebar;
