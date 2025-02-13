import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Bio from './Components/Bio'
import Skill from './Components/Skills'
import WorkExperience from './Components/WorkExperience'
import Education from './Components/Education'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-full overflow-y-auto antialiased">
            <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img">
            </div>
            <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
            <Hero/>
            <Navbar/>
            <Projects/>
            <Bio/>
            <Skill/>
            <WorkExperience/>
            <Education/>
            <ContactForm/>
            <Footer/>
            </div>
            
        </div>
    </>
  )
}

export default App
