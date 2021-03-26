import React,{useContext} from 'react'
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';
import TrackSearchResult from '../components/TrackSearchResult';
import { SongContext } from "../SongContext";


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
    }
})


const Body = ({accessToken}) => {
    const classes = useStyles()
    const [searchResult, setSearchResult] = useContext(SongContext)
    
    return (
      <div className={classes.body}>
        <Header accessToken={accessToken} />
        <div className={classes.all__songs}>
          {searchResult.map((track) => {
            return <TrackSearchResult track={track} key={track.uri} />;
            // return <h1>Yoo</h1>
          })}
        </div>
      </div>
    );
}

export default Body
