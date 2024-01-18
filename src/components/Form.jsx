import { useState } from 'react';
import { FormControl, Button } from '@chakra-ui/react'
import { renderFields } from '../utils/formActions'

export default function Form(props) {

    return (
        <FormControl>
            {renderFields(props.formFields)}
            <Button>Login</Button>
        </FormControl>
    )
}