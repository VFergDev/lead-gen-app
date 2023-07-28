
import React, { useState } from 'react';
import api from '../api';

const AddUser = () => {
  const [user, setUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    username: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/users', user);
      console.log('User added successfully:', response.data);
      // Optionally, you can redirect the user to another page after successful user addition.
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={user.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Design Ideas:</label>
          <input type="text" name="phone" value={user.ideas} onChange={handleChange} />
        </div><div>
          <label>Conversion:</label>
          <input type="text" name="conversion" value={user.conversion} onChange={handleChange} />
        </div>
        <div>
          <label>Built:</label>
          <input type="text" name="built" value={user.built} onChange={handleChange} />
        </div>
        <div>
          <label>Owned:</label>
          <input type="text" name="owned" value={user.owned} onChange={handleChange} />
        </div>
        <div>
          <label>Budget:</label>
          <input type="text" name="budget" value={user.budget} onChange={handleChange} />
        </div>
        <div>
          <label>Main, Guest, or Hall:</label>
          <input type="text" name="bathRoom" value={user.bathRoom} onChange={handleChange} />
        </div>
        <div>
          <label>Main, Guest, or Hall:</label>
          <input type="text" name="bathRoom" value={user.bathRoom} onChange={handleChange} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
