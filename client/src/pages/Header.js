import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

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

function Header() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
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
