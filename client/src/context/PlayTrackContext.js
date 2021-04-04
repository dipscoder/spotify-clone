// To load the track into the Player component when the user selects a song
import React, { createContext, useState } from "react";

export const PlayTrackContext = createContext();

export const PlayTrackProvider = (props) => {
  const [playingTrack, setPlayingTrack] = useState();
  return (
    <PlayTrackContext.Provider value={[playingTrack, setPlayingTrack]}>
      {props.children}
    </PlayTrackContext.Provider>
  );
};
