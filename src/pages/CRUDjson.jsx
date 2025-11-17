import React, { useState, useEffect } from "react";
import '../pages/CRUDjson.css';

const CRUDjson = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    username: '',
    password: '',
    gender: '',
    hobbies: []
  });
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setInputs((prev) => {
      const hobbies = prev.hobbies || []; 
      if (checked) {
        return { ...prev, hobbies: [...hobbies, value] };
      }
      else
        return {
          ...prev, hobbies: hobbies.filter((h) => h !== value)
        };
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputs.firstname || !inputs.username || !inputs.password || !inputs.gender || !inputs.hobbies) {
      alert('please fill the inputs!!');
      return;
    }

    if (isEdit) {
      fetch(`http://localhost:5000/users/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      })
        .then((res) => res.json())
        .then((updatedUser) => {
          setData(data.map((item) => (item.id === editId ? updatedUser : item)));
          resetForm();
        });
    } else {
      fetch(`http://localhost:5000/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs),
      })
        .then((res) => res.json())
        .then((newUser) => {
          setData([...data, newUser]);
          resetForm();
        });
    }
  };

  const handleEdit = (item) => {
    setInputs({
      firstname: item.firstname,
      username: item.username,
      password: item.password,
      gender: item.gender,
      hobbies: item.hobbies
    });
    setIsEdit(true);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setData(data.filter((item) => item.id !== id));
    });
  };

  const resetForm = () => {
    setInputs({ firstname: '', username: '', password: '', gender:'', hobbies:'' });
    setIsEdit(false);
    setEditId(null);
  };


  return (
    <>
      <h1>CRUD Demo with JSON Server</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="Name"
          value={inputs.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
        />
        <div className="gender-section">
         <label>Gender:</label>
         <label>
          <input type="radio"
          name="gender" 
          value="Male"
          checked= {inputs.gender === "Male"}
          onChange={handleChange}/>Male

         </label>
          <label>
            <input
              type="radio"        
              name="gender"
              value="Female"
              checked={inputs.gender === "Female"}
              onChange={handleChange}
            /> Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={inputs.gender === "Other"}
              onChange={handleChange}
            /> Other
          </label>
        </div>
        <div className="hobbies-section">
          <label>Hobbies:</label>
          <label>
            <input
              type="checkbox"
              value="Coding"
              checked={inputs.hobbies.includes("Coding")}
              onChange={handleCheckboxChange}
            /> Coding
          </label>
          <label>
            <input
              type="checkbox"
              value="Cricket"
              checked={inputs.hobbies.includes("Cricket")}
              onChange={handleCheckboxChange}
            /> Cricket
          </label>
          <label>
            <input
              type="checkbox"
              value="Music"
              checked={inputs.hobbies.includes("Music")}
              onChange={handleCheckboxChange}
            /> Music
          </label>
        </div>
<button type="submit">{isEdit ? 'Update' : 'Create'}</button>
      </form>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.firstname}</td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>{item.gender}</td>
              <td>{item.hobbies?.join(",")}</td>
              <td><button onClick={() => handleEdit(item)}>Edit</button></td>
              <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>



    </>
  );
};

export default CRUDjson;
