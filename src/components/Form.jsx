import { useState } from 'react';
import { FormControl, Button } from '@chakra-ui/react'
import { renderFields } from '../utils/formActions'

export default function Form(props) {
    const formFields = props.formFields

    const handleChange = (field, value) => {
        const updatedFields = { ...formFields };
        updatedFields[field].value = value;
        props.setPropsState(updatedFields);
        console.log(formFields)
    }

    return (
        <FormControl>
            {renderFields(formFields, handleChange)}
            <Button>{props.formName}</Button>
        </FormControl>
    )
}