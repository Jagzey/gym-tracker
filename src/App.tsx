import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Workouts from './components/Workouts'
import Profile from './components/Profile'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="full-page">
      <Header />

      <div className="middle-page">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

    </div>
    </BrowserRouter>
  )
}

export default App
