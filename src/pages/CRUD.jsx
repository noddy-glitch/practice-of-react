import React, { useEffect, useState } from 'react';
import './CRUD.css';

function CRUD() {
  const [inputs, setInputs] = useState({
    firstname: '',
    username: '',
    password: '',
  });
  const [data, setData] = useState([]);
  const [isedit, setisedit] = useState(false);
  const [editId, setEditId] = useState(null); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputs.firstname || !inputs.username || !inputs.password) {
      alert('Please fill all fields!');
      return;
    }

    if (isedit) {
      // Updating an existing entry
      const updatedData = data.map((item) =>
        item.id === editId ? { ...inputs, id: editId } : item
      );
      setData(updatedData);
      setisedit(false);
      setEditId(null);
    } else {
      // Adding a new entry
      const newData = {
        ...inputs,
        id: Date.now().toString(),
      };
      setData([...data, newData]);
    }

    setInputs({ firstname: '', username: '', password: '' });
  };

  const handleEdit = (item) => {
    setInputs({
      firstname: item.firstname,
      username: item.username,
      password: item.password,
    });
    setisedit(true);
    setEditId(item.id);
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">{isedit ? 'Update' : 'Submit'}</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Password</th>
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
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CRUD;
