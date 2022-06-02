import { useState } from 'react'
import { Header } from './components/Header'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SuperHeroes } from './pages/SuperHeroes'
import { RQSuperHeroes } from './pages/RQSuperHeroes'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
      </Routes>
    </main>
  )
}

export default App
