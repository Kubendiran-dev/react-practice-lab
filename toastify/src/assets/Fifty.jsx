import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Fifty = () => {

const [number, setNumber] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const num = Number(number)

    if (num >= 50 && num <= 150 && num % 5 === 0) {
      toast.success("Valid Number")
    } else {
      toast.error("Invalid Number")
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Number:</label><br />

        <input
          type="number"
          id="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <br /><br />
        <button type="submit">Check</button>
      </form>
    </>
  )
}

export default Fifty