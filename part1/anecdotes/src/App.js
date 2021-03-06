import React, { useState } from 'react'

const Anecdote = ({header, text, votes}) => {
  return(
    <div>
      <h1>{header}</h1>
      <div>{text}</div>
      <div>Has {votes} votes</div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))


  const randomizeSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    let updatedVotes = [...votes]
    updatedVotes[selected] += 1
    setVotes(updatedVotes)
  }

  // https://stackoverflow.com/a/11301464
  const highestVoteIndex = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <Anecdote 
        header='Anecdote of the day' 
        text={anecdotes[selected]} 
        votes={votes[selected]}
      />
      <button onClick={addVote}>Vote</button>
      <button onClick={randomizeSelected}>Next Anecdote</button>
      <Anecdote 
        header='Highest voted anecdote' 
        text={anecdotes[highestVoteIndex]}  
        votes={votes[highestVoteIndex]}
      />
    </div>
  )
}

export default App
