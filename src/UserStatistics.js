import React, { useEffect, useState } from 'react';

function UserStatistics() {
    const [genderStats, setGenderStats] = useState({ male: 0, female: 0, other: 0 });

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                // Direttamente calcolare le statistiche senza salvare users nello stato
                calculateGenderStatistics(data.users);
            })
            .catch(error => console.error("There was an error fetching the users:", error));
    }, []);

    const calculateGenderStatistics = (users) => {
        const initialStats = { male: 0, female: 0, other: 0 };
        const stats = users.reduce((acc, user) => {
            if (user.gender.toLowerCase() === 'male') acc.male += 1;
            else if (user.gender.toLowerCase() === 'female') acc.female += 1;
            else acc.other += 1;
            return acc;
        }, initialStats);
        setGenderStats(stats);
    };

    return (
        <div>
            <h1>Statistiche Utenti</h1>
            <div>
                <h2>Distribuzione per Genere</h2>
                <p>Maschi: {genderStats.male}</p>
                <p>Femmine: {genderStats.female}</p>
                <p>Altro: {genderStats.other}</p>
            </div>
            {/* Qui puoi aggiungere altre statistiche */}
        </div>
    );
}

export default UserStatistics;
