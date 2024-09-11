import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
// import Test from './components/Test'
import WelcomeBanner from './components/WelcomeBanner'
import Annoucement from "./components/Annoucement";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <WelcomeBanner/>
      <Annoucement/>
    </>
  )
}

export default App
