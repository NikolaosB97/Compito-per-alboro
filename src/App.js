import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersList from './UsersList'; // Il tuo componente esistente che mostra la tabella degli utenti
import UserDetails from './UserDetails'; // Il componente che creerai per mostrare i dettagli degli utenti
import UserStatistics from './UserStatistics'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/statistics">Visualizza Statistiche</Link>

            </li>
            {/* Aggiungi altri link al menu se necessario */}
          </ul>
        </nav>
        <Routes>
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/" element={<UsersList />} />
          <Route path="/statistics" element={<UserStatistics />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
