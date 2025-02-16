import { useState } from 'react'
import Navbar from './components/layout/navbar/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section className="app">
        <h1>Coffee Chat Roulette</h1>
      </section>
    </>
  )
}

export default App
