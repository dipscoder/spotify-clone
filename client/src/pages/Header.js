import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import SpotifyWebApi from "spotify-web-api-node";
import { SongContext } from "../SongContext";

const spotifyApi = new SpotifyWebApi({
  clientId: "7b215911d14245089d73d78055353cb2",
});

// Styles
const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "30px",
  },

  header__left: {
    flex: 0.5,
    minWidth: "70px",
    backgroundColor: "white",
    color: "gray",
    borderRadius: "30px",
    padding: "10px",
    display: "flex",
    alignItems: "center",

    "& input": {
      border: "none",
      width: "100%",
      outlineWidth: 0,
      height: "100%",
    },
  },


});

function Header({ accessToken, search, setSearch }) {
  const classes = useStyles();
  // const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useContext(SongContext)

  // * This will set the accessToken to the spotify api
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // * This will give us the response, that we get from spotify api , of our searched term
  useEffect(() => {
    if (!search) return setSearchResult([]);
    if (!accessToken) return;

    // ! Problem - Api will be called whenever we change "search" state(means whenever we type something it will call api)
    // ! Solution - So we need to cancel the request if the user is Typing and whenever he/she stops , we will call the api
    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;

      // console.log(res);
      // * Setting up the setSearchResult with the response that we get from the spotify api
      setSearchResult(
        res.body.tracks.items.map((track) => {
          // This will get the smallest album img from the image array
          let smallestAlbumImage = track.album.images.reduce(
            (smallestImg, currentImg) => {
              if (currentImg.height < smallestImg) return currentImg;
              // else
              return smallestImg;
            },
            track.album.images[0]
          );
          // Returning some specific things that we require in a object form
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    // * This will set cancel = true(line 61) which will stop the execution of API calling (line 65)
    // * Explanation - user types => & this useEffect(line 53) will run..., Also api calls take time and so in that mean time if user changes the "search" then the previous api call will get cancel
    return () => (cancel = true);
  }, [search, accessToken]);

  // console.log(searchResult);

  return (
    <div className={classes.header}>
      <div className={classes.header__left}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists,Songs or Albums"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="header__right">
        {/* <Avatar src={user?.images[0]?.url} alt={user?.display_name} /> */}
        {/* <h4>{user?.display_name}</h4> */}
      </div>
 
    </div>
  );
}

export default Header;
