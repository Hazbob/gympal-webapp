// import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import LoginButton from './Components/Auth/LoginButton'
import LogoutButton from './Components/Auth/LogoutButton'
import Profile from './Components/Auth/Profile'

function App() {
  // const { getAccessTokenSilently } = useAuth0();
  const fetchData = async () => {
    try {
      // const token = await getAccessTokenSilently();
      // Use token for API calls
    } catch (error) {
      console.error(error);
    }
  }

  fetchData()
  return (
    <>
      <h1 className='text-3xl'>GYMPAL</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  )
}

export default App