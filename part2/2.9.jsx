import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
    const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number : newNumber }
    const exists = persons.some(person => person.name === nameObject.name)
    {!exists ? setPersons(persons.concat(nameObject)) : alert(`${nameObject.name} is already added to phonebook`)}
    setNewName('')
    setNewNumber('')
  }

const handleFilter = (event) =>{
   setFilterName(event.target.value)
}

const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter show with <input onChange={handleFilter}/></div>
      <h2>add a new</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
          <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App
