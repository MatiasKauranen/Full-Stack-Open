import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import AddPerson from './components/AddPerson';
import PersonList from './components/PersonList';
import personService from './components/personService';
import './index.css'

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return (
    <div className="notification">
      {message}
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personService.getAll()
      .then(response => {
        setPersons(response);
      })
      .catch(error => {
        console.error('Error fetching initial state:', error);
      });
  }, []);

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    if (!newName || !newNumber) {
      window.alert("Please enter both name and number.");
      return;
    }

    const existingPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
    if (existingPerson) {
      const confirmed = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirmed) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        personService.update(existingPerson.id, updatedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id === updatedPerson.id ? updatedPerson : person
            ));
            setNotification(`Updated ${updatedPerson.name}`);
            setTimeout(() => {
              setNotification(null);
            }, 5000);
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.error('Error updating person:', error);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService.create(newPerson)
        .then(response => {
          setPersons([...persons, response]);
          setNotification(`Added ${response.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.error('Error adding new person:', error);
        });
    }
  };

  const deletePerson = id => {
    const personToDelete = persons.find(person => person.id === id);
    const confirmed = window.confirm(`Are you sure you want to delete ${personToDelete.name}?`);
    if (confirmed) {
      personService.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
          setNotification(`Deleted ${personToDelete.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
  };

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      
      <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      
      <Notification message={notification} />
      
      <AddPerson newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} addPerson={addPerson} />
      
      <PersonList filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
