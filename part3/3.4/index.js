const express = require('express')
const app = express()

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  person = persons.find(person => person.id === id)

  person ? res.json(person) : res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => 
{
  const id = req.params.id
  persons = persons.filter(person => person.id !== id)
  res.status(204).end
})

app.get('/info', (req, res) => {
  const info = `<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>`;
  res.send(info);
})

app.listen(3001, () => {
console.log('Server running on port 3001')
})

