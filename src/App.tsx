import './App.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'  
import Home from '@/pages/Home'
import About from '@/pages/About'
import Skills from '@/pages/Skills'
import Contact from '@/pages/Contact'
import Projects from '@/pages/Projects'
import Exp from '@/pages/Exp'


function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Exp/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
