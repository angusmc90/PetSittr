import { useState } from 'react';

export default function LoginForm() {
    const [credentials, SetCredentials] = useState({
        email: '',
        password:''
    });

    return(
        <>
            this is the login form
        </>
    )
}