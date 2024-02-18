import { useState } from 'react'
import NavBar from './Components/NavBar'

import './App.css'
import Main from './Components/Main'

function App() {
  
  const [newsCategory, setNewsCategory] = useState("general")

  return (
    <>
   
     <NavBar setNewsCategory={setNewsCategory} />
     <Main newsCategory={newsCategory} />
    </>
  )
}

export default App
