import { useState } from 'react'
import LandingPage from './components/landing-page/landing-page'
import Navbar from './components/layout/navbar/navbar'
import Dashboard from './components/layout/dashboard/dashboard'
import ProfileSettings from './components/features/profile-settings/profile-settings'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <Navbar />
      <main>
        {/* <ProfileSettings /> */}
      </main>
      {/* <section className="app">
        <h1>Coffee Chat Roulette</h1>
      </section> */}
      {/* <Dashboard /> */}
    </>
  )
}

export default App
