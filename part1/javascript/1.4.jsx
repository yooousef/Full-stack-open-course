const Header = (props) => {
  console.log(props);  
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercise}</p>
}

const Content = (props) => {
  return(
    <>
     <Part part={props.part1} exercises={props.ex1} />
      <Part part={props.part2} exercises={props.ex2} />
      <Part part={props.part3} exercises={props.ex3} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.ex1 + props.ex2 + props.ex3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course = {course} />
      <Content 
        part1={parts[0].name} ex1={parts[0].exercises}
        part2={parts[1].name} ex2={parts[1].exercises}
        part3={parts[2].name} ex3={parts[2].exercises}
      />
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises} />
    </>
  )
}

export default App
