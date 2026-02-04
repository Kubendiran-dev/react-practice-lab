import React from 'react'
import ContextUse from './ContextUse'
import UserContext from './UserContext'

const UserApp = () => {

  const username = [{id:1, name: "kubea", age:22}, {id:2, name:"rakshitha", age:20}]
  return (
    <>
    <UserContext.Provider value={username}>
      <ContextUse/>
    </UserContext.Provider>
    </>
  )
}

export default UserApp