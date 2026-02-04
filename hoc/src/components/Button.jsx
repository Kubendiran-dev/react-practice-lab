import { useState } from "react"

const Button = ({buttonname,buttonname2}) => {
    const [data,setData] =useState(0)
    const handle =()=>{
        setData(data +1)
    }
    const handle1 =()=>{
        setData(data -1)
    }
  return (
    <>
    <h1>{data}</h1>
    <button onClick={handle}>{buttonname}</button>
    <button onClick={handle1}>{buttonname2}</button>
    </>
  )
}

export default Button