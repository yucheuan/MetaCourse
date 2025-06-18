import logo from './logo.svg';
import './App.css';

const data = [
  {
    id: '1',
    title: 'Tiramisu',
    description: 'The best tiramisu in town',
    price: '$5.00',
  },
  {
    id: '2',
    title: 'Chocolate mousse',
    description: 'Unexplored flavour',
    price: '$6.00',
  },
];

const topDeseserts = data.map(dessert => {
  return{
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  }
})

function App() {
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
