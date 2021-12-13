import React, { useState } from 'react'

const Button = ({stateVar, stateSet, text}) => {
  return (
    <button onClick={() => stateSet(stateVar + 1)}>
      {text}
    </button>
  )
}

const StatisticLine = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if(all > 0){
    return (
      <table>
        <thead>
          <tr>
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <StatisticLine name='Good' value={good}/>
          <StatisticLine name='Neutral' value={neutral}/>
          <StatisticLine name='Bad' value={bad}/>
          <StatisticLine name='All' value={all}/>
          <StatisticLine name='Average' value={(good*1 + bad*-1) / all}/>
        </tbody>
      </table>
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