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

const Playlist = ({ playlist, setSearch }) => {
  const classes = useStyles();
  const [playlistTrack, setPlaylistTrack] = useState([]);

  useEffect(() => {
    if (!playlistTrack) return setPlaylistTrack([]);
    setPlaylistTrack(
      playlist.tracks.items.slice(0,31).map((track) => {
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
  }, [playlist]);

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

      <br />
      <hr />
      <div className={classes.all__songs}>
        {playlistTrack.map((track) => {
          return <TrackSearchResult track={track} key={track.uri} setSearch={setSearch} />;
        })}
      </div>
    </div>
  );
};

export default Playlist;
