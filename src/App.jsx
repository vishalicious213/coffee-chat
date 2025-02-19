import { useState } from 'react'
import LandingPage from './components/landing-page/landing-page'
import Navbar from './components/layout/navbar/navbar'
import Signup from './components/features/signup/signup'
import './App.css'

function App() {
  const [pageToLoad, setPageToLoad] = useState("landingpage")

  return (
    <>
      <main>
        {pageToLoad === "landingpage" ? <LandingPage changePage={setPageToLoad} />
          : pageToLoad === "navbar" ? <Navbar />
          : pageToLoad === "signup" ? <Signup />
          : pageToLoad === "about-us" ? <AboutUs />
          : null}
      </main>
    </>
  )
}

export default App
