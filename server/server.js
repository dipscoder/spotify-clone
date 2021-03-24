require('dotenv').config()
const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()); //Used to parse JSON bodies


const credentials = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
};

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    // console.log("Hii");
    let spotifyApi = new spotifyWebApi({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      redirectUri: process.env.REDIRECT_URI,
      refreshToken,
    });
  
    spotifyApi
      .refreshAccessToken()
      .then((data) => {
        // console.log(data.body);
        res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in,
        })
  
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(400);
      });
});

  
app.post('/login', (req,res) => {
    // Get the "code" value posted from the client-side and get the user data from the spotify api 
    let spotifyApi = new spotifyWebApi(credentials)
    const code = req.body.code

    spotifyApi.authorizationCodeGrant(code).then((data) => {

        // Returning the User's Data in the json formate  
        res.json({
            accessToken : data.body.access_token,
            refreshToken : data.body.refresh_token,
            expiresIn : data.body.expires_in
        }) 
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400)
    })

})


// spotifyApi.setAccessToken(data.body['access_token']);
// spotifyApi.setRefreshToken(data.body['refresh_token']); 

app.listen(9000)
