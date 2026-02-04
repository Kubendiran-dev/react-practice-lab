import React from 'react'

const Child = ({ name, setName }) => {
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName("react pro")}>Change</button>
    </>
  )
}

export default Child
