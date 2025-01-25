
import ExternalApi from './Api/Auth'
import './App.css'
import LoginButton from './Components/Auth/LoginButton'
import LogoutButton from './Components/Auth/LogoutButton'
import Profile from './Components/Auth/Profile'

function App() {

  return (
    <>
      <h1 className='text-3xl'>GYMPAL</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <ExternalApi />
    </>
  )
}


export default App