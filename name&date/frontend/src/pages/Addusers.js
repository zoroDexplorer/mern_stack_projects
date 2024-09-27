import React, { useState } from 'react';
import axios from 'axios';

const AddUsers = () => {
  const [name, setName] = useState(''); // State to store input value
  const [message, setMessage] = useState(''); // State for success/error messages

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing

    try {
      // Send a POST request to add the user
      await axios.post('http://localhost:3000/api/users/adduser', { name });

      // Set success message and clear the input field
      setMessage('User added successfully!');
      setName('');
    } catch (error) {
      // If there's an error (e.g., user already exists), show the error message
      if (error.response) {
        setMessage(error.response.data.message); // Backend error message
      } else {
        setMessage('An unexpected error occurred'); // General error message
      }
    }
  };

  return (
    <div>
      <h2>Add a User</h2>

      {/* Display the success or error message */}
      {message && <p>{message}</p>}

      {/* Form to add a user */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUsers;
