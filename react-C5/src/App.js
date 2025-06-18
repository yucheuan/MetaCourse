import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading"
import Btn from './Btn';
import Intro from './components/Intro';
import {Routes, Route, Link} from 'react-router-dom'
import React, { useState } from 'react';
import CurrentMessage from './components/CurrentMessage';

//functional component App in App file
function App() {
  const [word, setWord] = useState('Eat')

  function handleClick () {
   setWord('Drink')
  }

  return (
    <div className="App">
      <header className="App-header">
        <CurrentMessage />  
        <Heading emoji={word} /> 
        <Btn /> 
        <br></br>
        <button onClick={handleClick}>Click here to change word</button>
        <img src={logo} className="App-logo" alt="logo" />

        <Routes> 
	        {/* <Route path="/" element={<Homepage />} /> */}
	        <Route path="/intro" element={<Intro />} />	
        </Routes> 
        <nav>
	        <Link to="/" className="nav-item">Homepage</Link> 
          &nbsp;
	        <Link to="/intro" className="nav-item">Introduction</Link>	
        </nav>
      </header>
    </div>
  );
}

//login and logout with homepage 
// import LoginButton from './LoginButton';
// import LogoutButton from './LogoutButton';
// import HomePage from './HomePage';

// function App() {
//     const [loggedIn, setLoggedIn] = useState(false);

//     const login = () => setLoggedIn(true);
//     const logout = () => setLoggedIn(false);

//     return (
//         <>
//             {loggedIn ? (
//                 <div>
//                     <HomePage />
//                     <LogoutButton logout={logout} />
//                 </div>
//             ) : (
//                 <LoginButton login={login} />
//             )}
//         </>
//     );
// }

export default App;
