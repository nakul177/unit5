import axios from "axios";
import { useState } from "react";
import { Formdata } from "./Formdata";

export const Form = () => {
  const [userData, setUserData] = useState({
    Name: "",
    Age: "",
    Addresss: "",
    Departemnt: "",
    Salary: "",
    marital: false,
  });

  //   const [data, setData] = useState([]);
  //   // Using useEffect to call the API once mounted and set the data
  //   useEffect(() => {
  //     (async () => {
  //       const result = await axios("http://localhost:3002/User");
  // setData(result.data);
  //     })();
  //   }, []);
  const handleCheckbox = (e) => {
    const { id } = e.target;
    const value = e.target.checked;
    setUserData({
      ...userData,
      [id]: value,
    });
  };

  const handleData = (e) => {
    const { id, value } = e.target;

    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/User", userData).then(() => {
      alert("Thanks");
    });
  };

  return (
    <>
      <h1>Sign In Form</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>Name :-</label>
        <input id="Name" type="text" placeholder="Name" onChange={handleData} required/>
        <br />
        <label>Age :-</label>
        <input id="Age" type="text" placeholder="Age" onChange={handleData} required/>
        <br />
        <label>Address :-</label>
        <input
          id="Addresss"
          type="text"
          placeholder="Addess"
          onChange={handleData}
          required
        />
        <br />
        <label>Departemnt :-</label>
        <select id="Departemnt" onChange={handleData} required>
          <option>--select--</option>
          <option value="It">IT</option>
          <option value="Police">Police</option>
        </select>
        <br />
        <label> Salary :-</label>
        <input
          id="Salary"
          type="number"
          placeholder=" Salary"
          onChange={handleData}
          required
        />
        <br />
        <label htmlFor="Name">marital :-</label>
        <input id="marital" type="checkbox" onChange={handleCheckbox} /> <br />
        <input type="submit" value="submit" />
      </form>

      <Formdata />
    </>
  );
};
// Create a react app.
// Create a form that accepts employee details
// Name
// Age
// Address
// Department ( select tag )
// Address
// marital state ( check box )
