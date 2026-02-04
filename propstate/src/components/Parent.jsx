import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

  const [name, setName] = useState("react")

  return (
    <Child name={name} setName={setName} />
  )
}

export default Parent
