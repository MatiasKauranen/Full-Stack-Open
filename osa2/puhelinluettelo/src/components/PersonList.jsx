import React from 'react';

const PersonList = ({ filteredPersons, deletePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredPersons.map(person => (
          <li key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
