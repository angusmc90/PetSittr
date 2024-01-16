import { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import LoginForm from '../components/Forms/LoginForm';
import SignupForm from '../components/Forms/SignupForm';

export default function LoginPage() {

    const [formName, setFormName] = useState('login')

    const handleChange = (e, newValue) => {
        setFormName(newValue)
    }

    return (
        <Tabs value={formName} onChange={handleChange}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList>
              <Tab label="Login" value="login" />
              <Tab label="Sign Up" value="signup" />
            </TabList>
          </Box>
          <TabPanel value="login">
            <LoginForm />
          </TabPanel>
          <TabPanel value="signup">
            <SignupForm />
          </TabPanel>
        </Tabs>
      );
    }