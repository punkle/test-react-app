import logo from './logo.svg';
import './App.css';

function App() {
  const queryParams = new URLSearchParams(document.location.search);
  const redirectUrl = queryParams.get("url");
  document.location = redirectUrl;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test React App
        </a>
      </header>
    </div>
  );
}

export default App;
