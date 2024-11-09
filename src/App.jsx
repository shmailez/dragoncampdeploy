
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Text from './components/Text'

function App() {
  const [local, setLocal] = useState("town square")
  
  const getLocal = (l) => {
    setLocal(l)
  }

  return (
    <>
      <Button getLocal={getLocal}/>
      <Text local={local}/>
    </>
  )
}

export default App
