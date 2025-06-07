import logo from './logo.svg';
import './App.css';

//functional component Header in App file
function Header() {
  return <h1>Hello world</h1>
}

//functional component App in App file
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />  
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
