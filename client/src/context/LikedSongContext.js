import React, { createContext, useState } from "react";

export const LikedSongContext = createContext();

export const LikedSongProvider = (props) => {
  const [likedSong, setLikedSong] = useState(null)

  return (
    <LikedSongContext.Provider value={[likedSong, setLikedSong]}>
      {props.children}
    </LikedSongContext.Provider>
  );
};



















// spotifyApi.getMySavedTracks({
    //     limit : 20,
    //     offset: 0
    //   })
    //   .then(function(data) {
    //     console.log(data);
    //   })