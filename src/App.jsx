import { useState } from 'react'
import LandingPage from './components/landing-page/landing-page'
import AboutUs from './components/landing-page/about-us'
import Navbar from './components/layout/navbar/navbar'
import Signup from './components/features/signup/signup'
import Faq from './components/landing-page/faq'
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
          : pageToLoad === "faq" ? <Faq />
          : null}
      </main>
    </>
  )
}

export default App
