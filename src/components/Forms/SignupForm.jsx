import { useState } from 'react';
import { FormControl, Button } from '@chakra-ui/react'
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
        <FormControl>
            {renderFields(credentials)}
            <Button>Create Account</Button>
        </FormControl>
    )
}