import React, { useState, useEffect } from 'react'
import axios from "axios";
import UserCard from './components/UserCard';

export default function UserList() {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        axios
          .get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            setUsers(response.data);
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
          });
      }, []);

  return (
    <>
      <h2 className='text-2xl text-primary my-6 font-bold text-center'>User List</h2>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {users.map((user) => (
          <li>
            <UserCard 
            name={user.name} 
            email={user.email}  
            city={user.address.city} 
            zipcode = {user.address.zipcode}
          />
          </li>
        ))}
      </ul>
    </>
  )
}
