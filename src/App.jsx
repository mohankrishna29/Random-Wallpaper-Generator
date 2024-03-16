import { useState } from 'react'
import Nav from "./components/nav.jsx"
import Scene from "./components/scene.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Scene />
    </>
  )
}

export default App
