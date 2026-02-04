import React, { useRef } from 'react'

const Counter = () => {

const counterRef = useRef(0)
const txtRef = useRef(null)

const increment =()=>{

  counterRef.current = counterRef.current+1
  txtRef.current.innerHTML = counterRef.current

}
  return (
    
    <>
    <h1 ref={txtRef}>0</h1>
    <button onClick={increment}>Increment</button>
    
    </>
  )
}

export default Counter