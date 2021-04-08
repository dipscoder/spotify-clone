import React, { useEffect, useState } from "react";
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
    },
  },

  body__infoText: {
    flex: "1",

    "& h2": {
      fontSize: "48px",
      marginBottom: "10px",
    },

    "& p": {
      fontSize: "14px",
    },
  },
});

const LikedSongs = ({ likedSong, setSearch }) => {
  const classes = useStyles();
  const [likedSongsTrack, setLikedSongsTrack] = useState([]);

  useEffect(() => {
    if (!likedSongsTrack) return setLikedSongsTrack([]);
    setLikedSongsTrack(
        likedSong.items.map((track) => {
        // This will get the smallest album img from the image array
        let smallestAlbumImage = track.track.album.images.reduce(
          (smallestImg, currentImg) => {
            if (currentImg.height < smallestImg) return currentImg;
            // else
            return smallestImg;
          },
          track.track.album.images[0]
        );
        // Returning some specific things that we require in a object form
        return {
          artist: track.track.artists[0].name,
          title: track.track.name,
          uri: track.track.uri,
          albumUrl: smallestAlbumImage.url,
        };
      })
    );
  }, [likedSong]);

  return (
    <div>
      <div className={classes.body__info}>
        <img src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png" alt="Liked Songs" />

        <div className={classes.body__infoText}>
          <strong>PLAYLIST</strong>
          <h2>Liked Songs</h2>
        </div>
      </div>

      <br />
      <hr />
      <div className={classes.all__songs}>
        {likedSongsTrack.map((track) => {
          return <TrackSearchResult track={track} key={track.uri} setSearch={setSearch} />;
        })}
      </div>
    </div>
  );
};

export default LikedSongs;
