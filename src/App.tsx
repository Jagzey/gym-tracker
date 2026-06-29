import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="full-page">
      <Header />

      <div className="middle-page">
        <Sidebar />
        <Dashboard />
      </div>

    </div>
  )
}

export default App
