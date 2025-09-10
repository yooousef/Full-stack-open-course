import { useEffect, useState } from "react"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import Filter from "./components/Filter"
import personService from "./services/persons"

const App = () => {
   const [persons, setPersons] = useState([])
   
   useEffect(() => {
    personService.getAll()
      .then(initialPerson => setPersons(initialPerson))
  }, [])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setFilterName(event.target.value)

  const addNewPerson = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber }

    const exists = persons.some(person => person.name === nameObject.name)
    if (!exists) {
      personService.create(nameObject)
        .then(newPerson => setPersons(persons.concat(newPerson)))

    } else {
      alert(`${nameObject.name} is already added to phonebook`)
    }

    setNewName('')
    setNewNumber('')
  }

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterName={filterName} handleFilter={handleFilter} />

      <h3>Add a new</h3>

      <PersonForm 
        addNewPerson={addNewPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
