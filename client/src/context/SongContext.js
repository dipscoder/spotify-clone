import React, { createContext, useState } from "react";

export const SongContext = createContext();

export const SongProvider = (props) => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <SongContext.Provider value={[searchResult, setSearchResult]}>
      {props.children}
    </SongContext.Provider>
  );
};
