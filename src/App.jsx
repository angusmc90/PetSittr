import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path={'/login'} element={ <LoginPage/> }/>
      <Route path={'/sits'} element={ <FeedPage/> }/>
      <Route path={'/user'} element={ <UserPage/> }/>
    </Routes>
  )
}

export default App
