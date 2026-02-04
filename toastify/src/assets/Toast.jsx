import React, { useState } from 'react'
import { toast } from 'react-toastify'


const Toast = () => {

  const [number, setNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()   // ✅ fixed

    const num = Number(number)

    if (num >= 10 && num <= 100 && num % 10 === 0) {
      toast.success("Good Number")
    } else {
      toast.error("Not a Good Number")  // ✅ fixed
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Number:</label><br />

        <input
          type="number"
          id="number"
          placeholder="Enter the valid number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <br /><br />
        <button type="submit">Check</button>
      </form>
    </>
  )
}

export default Toast
