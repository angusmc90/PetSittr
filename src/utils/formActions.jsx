import { Input } from '@chakra-ui/react'

function renderFields(e, handleChange) {
    // return KVPs as an array
    const fieldsArr = Object.entries(e);
    // for each index in the array, create a field
    const fields = fieldsArr.map(([fieldName, fieldVal]) => (
        // come back to make this conditional for field types
        console.log(fieldName),
        console.log(fieldVal.value),
        <Input key={fieldName} 
            placeholder={fieldName} 
            value={fieldVal.value}
            onChange={(e)=> handleChange(fieldName, e.target.value)}/>
    ))
    return fields;
}

export {
    renderFields,
}