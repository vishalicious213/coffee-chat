import { useState } from 'react'
import LandingPage from './components/landing-page/landing-page'
import Navbar from './components/layout/navbar/navbar'
import Signup from './components/features/signup/signup'
import Dashboard from './components/layout/dashboard/dashboard'
import ProfileSettings from './components/features/profile-settings/profile-settings'
import './App.css'

function App() {
  const [pageToLoad, setPageToLoad] = useState("landingpage")

  return (
    <>
      {/* <LandingPage changePage={setPageToLoad} /> */}

      {pageToLoad === "landingpage" ? <LandingPage changePage={setPageToLoad} />
        : pageToLoad === "navbar" ? <Navbar />
        : pageToLoad === "signup" ? <Signup />
        // : pageToLoad === "dashboard" ? <Dashboard />
        : null}

      {/* <Navbar /> */}
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
