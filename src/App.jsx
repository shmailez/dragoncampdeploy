
import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [local, setLocal] = useState("town square")
  
  const getLocal = (l) => {
    setLocal(l)
  }

  console.log(local)

  return (
    <>
      <Button getLocal={getLocal}/>
    </>
  )
}

export default App
