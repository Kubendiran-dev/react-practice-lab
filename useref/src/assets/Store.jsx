import React, { useRef, useState } from 'react'

const store = () => {

    const prevRef = useRef(0)
    const [count,setCount] = useState(0)

    const increment =()=>{

        prevRef.current=count

        setCount(count+1)
    }
  return (
   <>
   <h1>Count:{count}</h1>
   <h1>Prev Count:{prevRef.current}</h1>
   <button onClick={increment}>Increment</button>
   </>
  )
}

export default store