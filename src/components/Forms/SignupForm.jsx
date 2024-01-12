import { useState } from 'react';

export default function SignUpForm() {
    const [credentials, SetCredentials] = useState({
        email: '',
        username: '',
        password:'',
        profilePic:''
    });

    return(
        <>
            this is the SignUp form
        </>
    )
}