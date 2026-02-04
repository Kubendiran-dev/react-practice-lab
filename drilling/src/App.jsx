import React from 'react'
import ActorsDetails from './components/ActorsDetails'
import UserApp from './context/UserApp'


const App = () => {

    const actorsinfo= [{id:1, name: "dhanush", age:44},{id:2, name:"simbu", age:43},{id:3, name:"VJS", age:45}]
  return (
    <>
    <ActorsDetails propsname = {actorsinfo}/>
    <UserApp/>
    </>
  )
}

export default App