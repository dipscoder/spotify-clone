require('dotenv').config()
const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')
const lyricsFinder = require('lyrics-finder')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json()); //Used to parse JSON bodies

const port = process.env.PORT || 9000;

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

app.get('/lyrics', async (req,res)=> {
  let lyrics = await lyricsFinder(req.query.artist,req.query.title) || "Sorry, No Lyrics Found 😕"
  res.json({ lyrics })
})

app.listen(port,() => console.log(`Listening at port: ${port}`))
