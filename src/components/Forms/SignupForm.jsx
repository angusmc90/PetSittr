import { useState } from 'react';
import { Button } from '@mui/material';
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
        <form>
            {renderFields(credentials)}
            <Button>Create Account</Button>
        </form>
    )
}