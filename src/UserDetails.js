import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error("There was an error fetching user details:", error));
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Email: {user.email}</p>
      {/* Aggiungi qui altri dettagli che vuoi visualizzare */}
    </div>
  );
}

export default UserDetails;