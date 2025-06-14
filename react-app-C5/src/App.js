import logo from './logo.svg';
import './App.css';
import Heading from "./components/Heading"
import Btn from './Btn';
import Intro from './components/Intro';

const bool = false;
const str1 = "just";

//functional component App in App file
function App() {
  const [word, setWord] = React.useState('Eat')

  function handleClick () {
   setWord('Drink')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Heading emoji="~ 🦭" />  
        <Heading emoji={word} /> 
        <Btn /> 
        <button onClick={handleClick}>Click here</button>
        <img src={logo} className="App-logo" alt="logo" />
        <Intro
                toggleBoolean={!bool}
                math={(10 + 20) / 3}
                str={str1 + ' another ' + 'string'}
            />
      </header>
    </div>
  );
}

export default App;
