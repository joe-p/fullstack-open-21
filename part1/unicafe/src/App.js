import React, { useState } from 'react'

const Button = ({stateVar, stateSet, text}) => {
  return (
    <button onClick={() => stateSet(stateVar + 1)}>
      {text}
    </button>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if(all > 0){
    return (
      <div>
        <div>Good: {good}</div>
        <div>Neutral: {neutral}</div>
        <div>Bad: {bad}</div>
        <div>All: {all}</div>
        <div>Average: {(good*1 + bad*-1) / all} </div>
      </div>
    )
  }
  else {
    return(
      <div> No feedback given </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give Feedback </h1>
      <Button stateVar={good} stateSet={setGood} text='Good'/>
      <Button stateVar={neutral} stateSet={setNeutral} text='Neutral'/>
      <Button stateVar={bad} stateSet={setBad} text='Bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App