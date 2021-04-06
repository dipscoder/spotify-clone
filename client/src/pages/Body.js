import React,{useContext, useEffect, useState} from 'react'
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';
import TrackSearchResult from '../components/TrackSearchResult';
import { SongContext } from "../context/SongContext";
import { LyricsContext } from '../context/LyricsContext';
import { PlayTrackContext } from '../context/PlayTrackContext';
import axios from "axios";
import { PlaylistContext } from '../context/PlaylistContext';
import Playlist from './Playlist';

// Styles
const useStyles = makeStyles({
    body : {
        height: "100vh",
        flex: 0.8,
        color: "white",
        background: "linear-gradient(rgb(91, 87, 115), rgba(0,0,0,1))",
        padding: "30px",
        overflowY: "overlay",

        '&::-webkit-scrollbar' : {
            display : "none"
        }
    },

    all__songs : {
        margin: "20px -30px",
    },

    lyrics : {
      textAlign: "center",
      whiteSpace: "pre",
    }
})


const Body = ({accessToken}) => {
    const classes = useStyles()
    const [searchResult, setSearchResult] = useContext(SongContext)
    const [playingTrack,setPlayingTrack] = useContext(PlayTrackContext)
    const [lyrics,setLyrics] = useContext(LyricsContext)
    const [playlist, setPlaylist] = useContext(PlaylistContext)
    const [search, setSearch] = useState("")
    
    // To get lyrics
    useEffect(() => {

      if(!playingTrack) return;

      axios.get("http://localhost:9000/lyrics",{
        params: {
          title: playingTrack.title,
          artist: playingTrack.artist,
        }
      }).then((res) => {
        // console.log(res);
        setLyrics(res.data.lyrics)
      })
      
    }, [playingTrack])

    return (
      <div className={classes.body}>
        {playlist===null && <Header accessToken={accessToken} search={search} setSearch={setSearch} />}
        <div className={classes.all__songs}>
          {searchResult.map((track) => {
            return <TrackSearchResult track={track} key={track.uri} setSearch={setSearch} />;
            // return <h1>Yoo</h1>
          })}
          {searchResult.length === 0 && (
            <div className={classes.lyrics}>{lyrics}</div>
          )}
        </div>
        
        {playlist !== null && <Playlist playlist={playlist} />}
      </div>
    );
}

export default Body
