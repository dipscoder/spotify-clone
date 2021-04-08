import React, { useContext, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';

import SpotifyWebApi from "spotify-web-api-node";
import { PlaylistContext } from "../context/PlaylistContext";
import { LikedSongContext } from "../context/LikedSongContext";
const spotifyApi = new SpotifyWebApi({
  clientId: "7b215911d14245089d73d78055353cb2",
});

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
    "& p": {
      margin: "10px 0 0 20px",
      fontSize: "14px",
    },
    "& p:hover": {
      color: "white",
      cursor: "pointer",
    },
  },

  buttons: {
    margin: "10px 0 0 75px",
    fontSize: "14px",
    alignItems: "center",
  },
});

const Sidebar = ({ accessToken }) => {
  const classes = useStyles();
  const [offsetValue, setOffsetValue] = useState(0);
  const [playlist, setPlaylist] = useContext(PlaylistContext);
  const [likedSong, setLikedSong] = useContext(LikedSongContext);
  const [cId, setCId] = useState("");
  const items = [
    {
      id: "toplists",
      name: "Top List",
    },
    {
      id: "bollywood",
      name: "Bollywood",
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
      id: "romance",
      name: "Romance",
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
  ];

  const handlePlaylist = (categoryId) => {
    if (!accessToken) return;
    if (!categoryId)  return;

    spotifyApi.setAccessToken(accessToken);

    spotifyApi
      .getPlaylistsForCategory(categoryId, {
        country: "IN",
        limit: 1,
        offset: offsetValue,
      })
      .then((data) => {
        //   console.log(data.body);
        //* We setting CId, so that we can hold the categoryId when we toggle the button(+ & -)
        setCId(categoryId);
        spotifyApi.getPlaylist(data.body.playlists.items[0].id).then((data) => {
          // console.log(data);
          setPlaylist(data.body);
          setLikedSong(null)
        });
      });
  };

  const handleLikedSongs = () => {
    // console.log("likiiiee");
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getMySavedTracks({
        limit : 20,
        offset: 0
      })
      .then(function(data) {
        // console.log(data);
        setLikedSong(data.body)
        setPlaylist(null)
        setCId("")
      })

  }
  const handleHomePage = () => {
    setLikedSong(null)
    setPlaylist(null)
    setCId("")
  }
  const handleIncrement = () => {
    if (offsetValue >= 10) {
      setOffsetValue(0);
      return;
    }
    setOffsetValue(offsetValue + 1);
  };
  const handleDecrement = () => {
    if (offsetValue <= 0) {
      setOffsetValue(10);
      return;
    }
    setOffsetValue(offsetValue - 1);
  };

  // Change playlist whenever offsetValue changes
  useEffect(() => {
    handlePlaylist(cId);
  }, [offsetValue]);

  return (
    <div className={classes.sidebar}>
      <img
        className={classes.sidebar__logo}
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />

      <SidebarOption id="Home" Icon={HomeIcon} title="Home" handleHomePage={handleHomePage} />
      <SidebarOption id="Home" Icon={MusicNoteIcon} title="Lyrics" handleHomePage={handleHomePage} />
      <SidebarOption
        id="Like"
        Icon={FavoriteIcon}
        title="Your Liked Songs"
        handleLikedSongs={handleLikedSongs}
      />

      {playlist !== null && (
        <>
          <p> &emsp; Suffle Between Different Playlists!😉 </p>
          <div className={classes.buttons}>
            <ButtonGroup
              size="small"
              aria-label="small outlined button group"
              color="inherit"
            >
              <Button onClick={handleDecrement}>-</Button>
              <Button>{offsetValue}</Button>
              <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>
          </div>
        </>
      )}

      <br />
      <strong className={classes.sidebar__title}>Playlist Categories</strong>
      <hr />

      <div className={classes.options}>
        {items.map((item) => (
          <SidebarOption
            key={item.id}
            id={item.id}
            title={item.name}
            handlePlaylist={handlePlaylist}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
