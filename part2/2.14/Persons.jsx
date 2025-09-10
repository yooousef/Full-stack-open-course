const Persons = ({ personsToShow, deletePerosn }) => {
  return (
    <div>
      {personsToShow.map(person => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => deletePerosn(person.id, person.name)}>delete</button>
        </p>
      ))}
    </div>
  )
}

export default Persons
