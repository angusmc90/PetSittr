import { 
    FormField,
    Form 
} from 'semantic-ui-react';



function handleChange(e) {
}

function renderFields(e) {
    // return KVPs as an array
    const fieldsArr = Object.entries(e);
    // for each index in the array, create a field
    const fields = fieldsArr.map( ([fieldName, fieldVal]) => (
        // const type = fieldVal.type.toString(),
        <FormField key={fieldName}>
            <Form.Input
            type='string'
            placeholder={fieldName}
            name={fieldName}
            value={fieldVal.value}
            onChange={handleChange()}
            />
      </FormField>
    ))
    return fields;
}

export {
    renderFields,
}