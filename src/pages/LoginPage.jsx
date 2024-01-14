import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'

import LoginForm from '../components/Forms/LoginForm';
import SignupForm from '../components/Forms/SignupForm';

export default function LoginPage() {
  const [portal, setPortal] = useState('login')

  return (
    // <ThemeProvider theme={myTheme}>
    <>
    <LoginForm></LoginForm>
    <SignupForm></SignupForm>
    </>

    // </ThemeProvider>
  )
}
