import React from 'react'
import {useState} from 'react'
import { createRoot } from 'react-dom/client'

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    let filling = '';
    if (inputs.tomato) filling += 'tomato';
    if (inputs.onion){
      if (inputs.tomato) filling += 'and';
    filling += 'onion';
    }
    if(filling =='') filling += 'no fillings';
    alert(`${inputs.firstname} wants a burger ${filling}`);
    event.preventDefault();


    
}
return (
  <form onSubmit={handleSubmit}>
    <label>My name is  :
      <input
        type="text"
        name= "firstname"
        value={inputs.firstname}
        onChange={handleChange} />

    </label>
    <p>i want a burger with:</p>
   <label>onion:
    </label>
    <input type="checkbox" 
    name = "onion"
    checked ={inputs.onion}
    onChange = {handleChange}
    />
    <label>tomato:</label>
    <input type="checkbox" 
    name = "tomato"
    checked = {inputs.tomato}
    onChange={handleChange}
    />
  <button type="submit">submit</button>
  </form>

)
}
export default MyForm
