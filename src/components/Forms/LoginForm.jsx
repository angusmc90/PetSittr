import { useState } from 'react-router-dom';
import {Link} from 'react-dom';
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
            <Link to='#'>Create a new account</Link>
        </>
    )
}