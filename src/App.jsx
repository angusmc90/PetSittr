import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import { ThemeProvider } from 'semantic-ui-react';
// import myTheme from './react-semantic-theme';

// import LoginPage from './pages/LoginPage';
// import FeedPage from './pages/FeedPage';
import UserPage from './pages/UserPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    // adding a note to use a different library than semantic
    // <ThemeProvider theme={myTheme}>
    <>
    <UserPage/>
    </>

    // </ThemeProvider>
  )
}

export default App
