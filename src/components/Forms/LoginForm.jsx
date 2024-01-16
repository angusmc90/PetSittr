import { useState } from 'react';
import { Button } from '@mui/material';

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
        <form>
            {renderFields(credentials)}
            <Button>Login</Button>
        </form>
    )
}