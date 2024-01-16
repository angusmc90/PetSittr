import { useState } from 'react';
import { FormControl, Button } from '@chakra-ui/react'
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
        <FormControl>
            {renderFields(credentials)}
            <Button>Login</Button>
        </FormControl>
    )
}