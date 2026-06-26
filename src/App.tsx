import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gym Progress Tracker</h1>

      <p>
        On this page, I will be creating my personal gym progress
        tracker! I will be able to track workouts, which includes
        exercises, with sets and reps, with weight done on sets.
      </p>
    </>
  )
}

export default App
