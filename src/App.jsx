import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'

import userService from './utils/userService'

import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  const [user, setUser] = useState(userService.getUser())

  function currentUser() {
    setUser(userService.getUser())
  }

  // PLACHOLDER
  // if no user
  //   return Routes
  //          catchall route to login page

  // else the catch-all route is sits page, maybe with a banner for path DNE?

  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/sits'} element={<FeedPage />} />
      <Route path={'/user'} element={<UserPage />} /> //add userID param here
      {/* <Route path={'/edit'} element={<EditUserPage />} /> */}
    </Routes>
  )
}

export default App
