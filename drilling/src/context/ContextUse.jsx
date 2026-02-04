import React, { useContext } from 'react'
import UserContext from './UserContext'

const ContextUse = () => {

    const user = useContext(UserContext)
  return (
    <>
    {user.map((e)=>(
<div key={e.id}>
 name:{e.name} <br />
 age:{e.age}
</div>
    ))}
    </>
  )
}

export default ContextUse