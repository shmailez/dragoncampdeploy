import { useEffect, useState } from "react"

const Counter = () => {

   const [count, setCount] = useState(0)
   
   useEffect(() => {
    setInterval(() => {
        setCount(c => c + 0.5)
    }, 1000)
   }, [])

    return <>
        <h1>{count}</h1>
    </>
}

export default Counter