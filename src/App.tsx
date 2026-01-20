import { Clients } from "./components/Clients"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { History } from "./components/History"
import { Navigation } from "./components/Navigation"
import { Services } from "./components/Services"
import { Values } from "./components/Values"
import './index.css'
import './App.css'


function App() {

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <History />
        <Services />
        <Clients />
        <Values />
        <Footer />
      </div>
    </>
  )
}

export default App
