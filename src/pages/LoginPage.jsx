import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { TabPane, Tab } from 'semantic-ui-react'

import LoginForm from '../components/Forms/LoginForm';
import SignupForm from '../components/Forms/SignupForm';

export default function LoginPage() {
    const portals = [
        { menuItem: 'Login', render: () => <TabPane><LoginForm/></TabPane> },
        { menuItem: 'Signup', render: () => <TabPane><SignupForm/></TabPane> },
      ]
      
  function showForm () {

  }

  return (
    <>
    <Tab panes={portals}></Tab>
    </>
  )
}
