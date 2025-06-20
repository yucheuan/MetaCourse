export default function Btn() {
    const clickHandler = () => console.log('clicked')   
    return (
        <button onClick={clickHandler}>
            Click me to console log
        </button>
    )
}

//using props to render different component to control state
export function LogInOutButton(props) {
  const isLoggedIn = props.isLoggedIn;
  
  if (isLoggedIn) {
    return <LogoutButton />;
  } else {
  return <LoginButton />;
  }
}

/*
function Form() {
import { useState } from 'react'; 

export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: 'Luke', 
    lastName: 'Jones', 
    email: 'lukeJones@sculpture.com', 
  }); 

  return ( 
    <> 
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, -> You are using ...form (the spread operator) to copy all the key-value pairs from the current state.
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <label> 
        Email: 
        <input 
          value={form.email} 
          onChange={e => { 
            setForm({ 
              ...form, 
              email: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p> 
    </> 
  ); 
} 
}
*/