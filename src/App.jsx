
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Text from './components/Text'
import Counter from './components/Counter'

function App() {
  const [local, setLocal] = useState("town square")
  
  const getLocal = (l) => {
    setLocal(l)
  }

  return (
    <>
      <Counter/>
      <Button getLocal={getLocal}/>
      <Text local={local}/>
    </>
  )
}

export default App
