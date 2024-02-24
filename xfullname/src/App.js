// import logo from './logo.svg';
import './App.css';
import {  useState } from "react";

function App() {
  let [name, setName] = useState({ first: "", last: "" });
  let [show, setShow] = useState({ Name: "", bool: false });

  let handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value });
  };

  let handleForm = (e) => {
    e.preventDefault();
    setShow({ Name: `${name.first} ${name.last}`, bool: true });
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={(e) => handleForm(e)} className="form">
        <div>
          <label for="first">First Name: </label>
          <input
            type="text"
            required
            id="first"
            value={name.first}
            name="first"
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="last">Last Name: </label>
          <input
            type="text"
            required
            id="last"
            value={name.last}
            name="last"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="input">
            Submit
          </button>
        </div>
      </form>
      {show.bool && <h3>Full Name: {show.Name}</h3>}
    </div>
  );
}

export default App;
