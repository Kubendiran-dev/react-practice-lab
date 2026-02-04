import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Limit = () => {

  const [value, setValue] = useState("")
  const [attempts, setAttempts] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (attempts >= 3) {
      toast.error("Limit Reached")
      return
    }

    setAttempts(prev => prev + 1)
    toast.success(`Submitted Successfully (${attempts + 1}/3)`)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter Something:</label><br />

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <br /><br />

        <button type="submit" > 
          Submit
        </button>
      </form>
    </>
  )
}

export default Limit

// disabled={attempts >= 3}