import { useState } from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


// import LoginForm from '../components/Forms/LoginForm';
// import SignupForm from '../components/Forms/SignupForm';
import Form from '../components/Form';

export default function LoginPage(props) {
    const loginForm = props.loginCredentials
    const signupForm = props.signupCredentials

    // const [formName, setFormName] = useState('login')

    // const handleChange = (e, newValue) => {
    //     setFormName(newValue)
    // }

    return (
        <Box>
            <Tabs>
                <TabList>
                    <Tab>Login</Tab>
                    <Tab>SignUp</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Form formFields={loginForm}/>
                    </TabPanel>
                    <TabPanel>
                    <Form formFields={signupForm}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    );
}