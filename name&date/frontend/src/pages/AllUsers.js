import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  // Function to fetch users from the API using Axios
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users/allusers');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Use useEffect to fetch the users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.name}<br/>{new Date(user.Date).toLocaleString()}</li>
            
))}
      </ul>
    </div>
  );
};

export default AllUsers;
