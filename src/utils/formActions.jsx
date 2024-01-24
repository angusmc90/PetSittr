import { Input } from '@chakra-ui/react'

function renderFields(e, handleChange) {
    // return KVPs as an array
    const fieldsArr = Object.entries(e);
    // for each index in the array, create a field
    return fieldsArr.map(([fieldName, fieldVal]) => {
        if (fieldVal.type === 'File') {
            console.log('FILE FILE FILE')
            console.log(fieldVal.type)
            return (
                <input key={fieldName}
                    type='file'
                    onChange={(e) => handleChange(fieldName, e.target.files[0])}/>
            );
        } else {
            console.log(fieldVal.type)
            return (
                <Input key={fieldName}
                    placeholder={fieldName}
                    value={fieldVal.value}
                    type="string"
                    onChange={(e) => handleChange(fieldName, e.target.value)} />
            );
        }
    });
}

export {
    renderFields,
}