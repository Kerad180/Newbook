import { useState } from 'react'
import { LoginInterface } from './components/LoginInterface.jsx'
import { MainContent } from './components/MainContent.jsx';
import './App.css'

const getUser = () => {
  const user = localStorage.getItem('user')
  return user !== null ? JSON.parse(user) : null
}

function App() {
  const [user, setUser] = useState(getUser());

  const onLogin = (user) => {
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const onLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }



  return ( user ? <MainContent onLogout={onLogout} user={user}/> : <LoginInterface onLogin={onLogin}/> )
}

export default App
