import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Toast from './assets/Toast'
import Fifty from './assets/Fifty'
import Limit from './assets/Limit'
import PatternCheck from './assets/PatternCheck'

const App = () => {
  return (
    <>
    <Toast/>
    <Fifty/>
    <Limit/>
    <PatternCheck/>
    <ToastContainer/>
    </>
  )
}

export default App