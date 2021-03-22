import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

// Url - http://localhost:3000/?code=someCode
// This will get url string after the '?' & .get() will get the code value from the url
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  
  return (
    <div className="App">
      {code ? <Dashboard code={code} /> : <Login />}
    </div>
  );
}

export default App;
