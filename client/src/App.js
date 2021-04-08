import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { PlayTrackProvider } from "./context/PlayTrackContext";
import { SongProvider } from "./context/SongContext";
import { LyricsProvider } from "./context/LyricsContext";
import { PlaylistProvider } from "./context/PlaylistContext";
import { LikedSongProvider } from "./context/LikedSongContext";
// Url - http://localhost:3000/?code=someCode
// This will get url string after the '?' & .get() will get the code value from the url
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  
  return (
    <SongProvider>
      <PlayTrackProvider>
        <LyricsProvider>
          <PlaylistProvider>
            <LikedSongProvider>
              <div className="App">{code ? <Dashboard code={code} /> : <Login />}</div>
            </LikedSongProvider>
          </PlaylistProvider>
        </LyricsProvider>
      </PlayTrackProvider>
    </SongProvider>
  );
}

export default App;
