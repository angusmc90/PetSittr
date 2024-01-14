import { useState } from 'react';
import {
    Form,
    Button,
} from 'semantic-ui-react';
import { renderFields } from '../../utils/formActions'


export default function SignUpForm() {
    const [credentials, SetCredentials] = useState({
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
            type: String,
            value: '',
        },
    });

    return (
        <>
            <Form>
                {renderFields(credentials)}
                <Button>Create Account</Button>
            </Form>
            <br/>
            - OR - <br/>
            Login to an existing account
         </>
    )
}