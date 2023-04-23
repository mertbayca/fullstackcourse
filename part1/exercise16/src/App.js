import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, votes}) => {
  const average = (good - bad) / votes
  const percentage = (good / votes) * 100
  
  return (
    <div>
      <h1>Statistics</h1>
      {votes === 0 ? (
        <p>No feedback has been given yet.</p>
      ) : (
        <>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={votes} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine
            text="Percentage"
            value={`${percentage.toFixed(2)}%`}
          />
        </>
      )}
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [votes, setVotes] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setVotes(votes + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setVotes(votes + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
    setVotes(votes + 1)
  }

  const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={handleGoodClick}>Good</Button>
        <Button onClick={handleNeutralClick}>Neutral</Button>
        <Button onClick={handleBadClick}>Bad</Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} votes={votes}/>
    </div>
  )
}

export default App
