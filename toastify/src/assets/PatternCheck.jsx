 import React, { useState } from 'react'
import { toast } from 'react-toastify'

const PatternCheck = () => {

  const [number, setNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    
    const value = number.toString()

    if (value.startsWith("9") && value.length === 4 && value.length<=4) {
      toast.success("Accepted Number")
    } else {
      toast.error("Rejected Number")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Number:</label><br />

        <input
          type="number"
          placeholder="Ex: 9xxx"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <br /><br />
        <button type="submit">Check</button>
      </form>
    </>
  )
}

export default PatternCheck
