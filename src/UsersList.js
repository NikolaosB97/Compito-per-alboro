import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error("There was an error fetching the users:", error));
  }, []);

  return (
    <div>
      <h1>Elenco Utenti</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><Link to={`/user/${user.id}`}>{user.firstName}</Link></td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;