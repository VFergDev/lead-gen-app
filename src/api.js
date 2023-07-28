import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3306', // Replace with the URL where your backend server is running
});

// Function to add a new user
export const addUser = async (userData) => {
    try {
      const response = await instance.post('/users', userData);
      return response.data;
    } catch (error) {
      throw new Error('Error adding user: ' + error.message);
    }
  };

export default instance;

