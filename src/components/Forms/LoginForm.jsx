import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Form,
    Button,
} from 'semantic-ui-react';
import { renderFields } from '../../utils/formActions'

export default function LoginForm() {
    const [credentials, SetCredentials] = useState({
        username: {
            type: String,
            value: '',
        },
        password: {
            type: String,
            value: '',
        },
    });

    return (
        <>
            <Form>
                {renderFields(credentials)}
                <Button>Login</Button>
            </Form> <br/>
            - OR - <br/>
            Create a new account
        </>
    )
}