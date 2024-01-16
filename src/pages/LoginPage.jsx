import { useState } from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


import LoginForm from '../components/Forms/LoginForm';
import SignupForm from '../components/Forms/SignupForm';

export default function LoginPage() {

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
                        <LoginForm />
                    </TabPanel>
                    <TabPanel>
                        <SignupForm />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>

    );
}