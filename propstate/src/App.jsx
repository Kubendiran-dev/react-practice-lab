import Parent from "./components/Parent"
import Profile from "./components/Profile"
import User from "./components/User"

const App = () => {
  const name = "kubea"

  return (
    <>
      <Profile name={name} />
      <User name={name} />
      <Parent />
    </>
  )
}

export default App
