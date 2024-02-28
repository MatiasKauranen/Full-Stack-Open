import React from 'react';

const PersonList = ({ filteredPersons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredPersons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
