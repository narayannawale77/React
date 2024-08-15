import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', comment: '', 
    isVisiable: true, mode:'', car:'' });

  function changeHandler(event) {
    const {name, value, checked, type} = event.target // desructuring
    setFormData(prevFormData => ({
      ...prevFormData,
      // [event.target.name]: event.target.value,
      [name]: type ==  "checkbox" ? checked : value, //Due to destructring 
    }));
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevents page refresh
    console.log(formData);
    
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />

        <input
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br></br>

        <input
          type="textarea"
          placeholder="Enter your Comment"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        />
        <br></br>

        <input
          type = 'checkbox'
          onChange={changeHandler}
          id='isVisiable'
          name = "isVisiable"
          checked = {formData.isVisiable}
        />
        <label htmlFor='isVisiable'>is ? </label>
        <br></br>
        
        <fieldset>
          <legend>Mode</legend>
          <input
            type='radio'
            name='mode'
            id='lightMode'
            onChange={changeHandler}
            value="lightMode"
            checked = {formData.mode === "lightMode"}
          />
          <label htmlFor='lightMode'>Light Mode</label>
          
          <input
            type='radio'
            name='mode'
            id='darkMode'
            onChange={changeHandler}
            value="darkMode"
            checked = {formData.mode === "darkMode"}
          />
          <label htmlFor='darkMode'>Dark Mode</label>
        </fieldset>
     


        <label htmlFor='car'>Select Car   </label>
        <select 
          name = "car"
          id = "car"
          onChange={changeHandler}
          value={formData.car}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">fartuner</option>
          <option value="Tharrr">Tharrr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
    
        </select>

        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
