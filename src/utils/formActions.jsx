import { 
    FormField,
    Input 
} from 'semantic-ui-react';

function handleChange(e) {
}

function renderFields(e) {
    // return KVPs as an array
    const fieldsArr = Object.entries(e);
    // for each index in the array, create a field
    const fields = fieldsArr.map( ([fieldName, fieldVal]) => (
        <FormField key={fieldName}>
            <Input
            type={fieldVal.type}
            placeholder={fieldName}
            name={fieldName}
            value={fieldVal}
            />
      </FormField>
    ))
    return fields;
}

export default {
    renderFields,
}