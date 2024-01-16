import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { ThemeProvider } from 'semantic-ui-react';
// import myTheme from './react-semantic-theme';
import './App.css'
import 'semantic-ui-css/semantic.min.css'

import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    // <ThemeProvider theme={myTheme}>
    <>
    <UserPage></UserPage>
    </>

    // </ThemeProvider>
  )
}

export default App
