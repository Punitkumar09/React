import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(15)


   //let counter = 15

   const addvalue = () => {
    console.log("clicked", counter);
    
   //counter = counter + 1
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
   setCounter((prevCounter) => prevCounter + 1)
     
   }

   const removeValue = () => {
    console.log("romove", counter);
    setCounter(counter - 1)
    
   } 

  return (
    <>
      <h1>react practice</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addvalue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
