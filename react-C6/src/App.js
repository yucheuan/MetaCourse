import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Signup from './Signup';

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

//data transformation for new object
const topDeseserts = data.map(dessert => {
  return{
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  }
})

function App() {
  const listItems = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}` //this is in JavaScript env -> use `${ }`
    return <li>{itemText}</li> //this is to render React component -> use { }
  })

  return (
    <div>
      <ul>
        {listItems}
      </ul>
      <Form />
      <Signup />
    </div>
  );
}

export default App;
