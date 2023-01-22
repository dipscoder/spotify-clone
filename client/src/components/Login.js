import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    login: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        backgroundColor: 'black',

        '& img': {
            width: '50%'
        },

        '& a': {
            padding: '20px',
            borderRadius: '99px',
            backgroundColor: '#1db954',
            fontWeight: 600,
            color: 'white',
            textDecoration: 'none',
        },

        '& a:hover': {
            backgroundColor: ' white',
            borderColor: '#1db954',
            color: '#1db954',
        }
    },
});

// https://developer.spotify.com/documentation/general/guides/authorization-guide/

const AUTH_URL = window.location.href.includes('localhost') ?
    'https://accounts.spotify.com/authorize?client_id=7b215911d14245089d73d78055353cb2&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state' :
    'https://accounts.spotify.com/authorize?client_id=7b215911d14245089d73d78055353cb2&response_type=code&redirect_uri=https://spotify-clone-client.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

function Login() {
    const classes = useStyles()

    return (
        <div className={classes.login}>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify-Logo" />
            <a href={AUTH_URL}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
