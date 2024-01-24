import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import FeedPage from './pages/FeedPage';
import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  // const [loginCredentials, setLoginCredentials] = useState({
  //   username: {
  //     type: String,
  //     value: '',
  //   },
  //   password: {
  //     type: String,
  //     value: '',
  //   },
  // })

  // const [signupCredentials, setSignupCredentials] = useState({
  //   email: {
  //     type: String,
  //     value: '',
  //   },
  //   username: {
  //     type: String,
  //     value: '',
  //   },
  //   password: {
  //     type: String,
  //     value: '',
  //   },
  //   passwordConfirm: {
  //     type: String,
  //     value: '',
  //   },
  //   profilePic: {
  //     type: String,
  //     value: '',
  //   },
  // })

  // const editUser

  return (
    <Routes>
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'/sits'} element={<FeedPage />} />
      <Route path={'/user'} element={<UserPage />} />
      {/* <Route path={'/edit'} element={<EditUserPage />} /> */}
    </Routes>
  )
}

export default App
