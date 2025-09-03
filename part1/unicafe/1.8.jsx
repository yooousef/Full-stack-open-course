import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return(
    <p>{props.name} : {props.text}</p>
  )
}

const App = () =>{

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = bad + good + neutral

  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics name="good" text={good}/> 
      <Statistics name="neutral" text={neutral}/> 
      <Statistics name="bad" text={bad}/> 
      <Statistics name="all" text={all}/> 
      <Statistics name="average" text={all ? (good - bad) / all : 0}/> 
      <Statistics name="positive" text={all ? ((good / all) * 100).toFixed(1) + ' %' : '0 %'}/>      
    </div>
  )
}

export default App
