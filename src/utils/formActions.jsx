import { TextField } from '@mui/material';




function handleChange(e, newValue) {
}

function renderFields(e) {
    // return KVPs as an array
    const fieldsArr = Object.entries(e);
    // for each index in the array, create a field
    const fields = fieldsArr.map(([fieldName, fieldVal]) => (
        // come back to make this conditional for field types
        <TextField key={fieldName} label={fieldName} value={fieldVal} />
    ))
    return fields;
}

export {
    renderFields,
}