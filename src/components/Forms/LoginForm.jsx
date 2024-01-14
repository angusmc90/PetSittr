import { useState } from 'react';
import { 
    Form,
    FormField,
    Button,
    Input 
} from 'semantic-ui-react';

export default function LoginForm() {
    const [credentials, SetCredentials] = useState({
        username: '',
        password:''
    });

    return(
        <Form>
            <FormField>
                <Input placeholder='username' />
            </FormField>
            <FormField>
                <Input placeholder='password' />
            </FormField>
            <Button>Login</Button>
        </Form>
    )
}