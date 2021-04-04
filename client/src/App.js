import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import { PlayTrackProvider } from "./PlayTrackContext";
import { SongProvider } from "./SongContext";

// Url - http://localhost:3000/?code=someCode
// This will get url string after the '?' & .get() will get the code value from the url
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  
  return (
    <SongProvider>
      <PlayTrackProvider>
        <div className="App">{code ? <Dashboard code={code} /> : <Login />}</div>
      </PlayTrackProvider>
    </SongProvider>
  );
}

export default App;
