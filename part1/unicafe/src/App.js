import React, { useState } from 'react'

const Button = ({stateVar, stateSet, text}) => {
  return (
    <button onClick={() => stateSet(stateVar + 1)}>
      {text}
    </button>
  )
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
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
    </div>
  )
}

export default App