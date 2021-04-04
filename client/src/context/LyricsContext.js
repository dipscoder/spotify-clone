import React, { createContext, useState } from "react";

export const LyricsContext = createContext();

export const LyricsProvider = (props) => {
  const [lyrics, setLyrics] = useState("")

  return (
    <LyricsContext.Provider value={[lyrics, setLyrics]}>
      {props.children}
    </LyricsContext.Provider>
  );
};
