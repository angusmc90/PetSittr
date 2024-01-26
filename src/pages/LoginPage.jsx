import { useState } from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import Form from '../components/Form';

export default function LoginPage() {
    const [loginCredentials, setLoginCredentials] = useState({
        username: {
          type: String,
          value: '',
        },
        password: {
          type: String,
          value: '',
        },
      })
    
    const [signupCredentials, setSignupCredentials] = useState({
        email: {
          type: String,
          value: '',
        },
        username: {
          type: String,
          value: '',
        },
        password: {
          type: String,
          value: '',
        },
        passwordConfirm: {
          type: String,
          value: '',
        },
        profilePic: {
          type: 'File',
          value: '',
        },
      })

    return (
        <Box>
            <Tabs>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>SignUp</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Form formName={'Login'}
                            formFields={loginCredentials} 
                            setPropsState={setLoginCredentials}/>
                    </TabPanel>
                    <TabPanel>
                        <Form formName={'Sign Up'}
                            formFields={signupCredentials} 
                            setPropsState={setSignupCredentials}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    );
}