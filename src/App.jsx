import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let counter = 10;
  let [counter, setCounter] = useState(0)

  const addValue = () =>{
      if(counter < 20){
        counter = counter + 1;
        setCounter(counter);
      }
    }
     
 //

  const removValue = () =>{
    if(counter > 0){
    counter = counter - 1;
    setCounter(counter);
  }
}

  return (
    <>
      <h1>hello react</h1>
      <h2>counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removValue}
      >remove value</button>
    </>
  )
}

export default App
