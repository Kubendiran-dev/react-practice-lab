import React from 'react'
import withButton from './hoc/withButton'
import Button from './components/Button'

const App = () => {
    const NewCompon =withButton(Button)
  return (
    <>
    <NewCompon buttonname={"incremnet"} buttonname2 ={"Decremnt "} /> 
   
    </>
  )
}

export default App