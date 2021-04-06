// To load the track into the Player component when the user selects a song
import React, { createContext, useState } from "react";

export const PlaylistContext = createContext();

export const PlaylistProvider = (props) => {
  const [playlist, setPlaylist] = useState(null);
  return (
    <PlaylistContext.Provider value={[playlist, setPlaylist]}>
      {props.children}
    </PlaylistContext.Provider>
  );
};
