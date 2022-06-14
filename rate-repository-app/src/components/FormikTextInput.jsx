import React from 'react'
import { StyleSheet } from 'react-native'
import TextInput from './TextInput'
import Text from './Text'
import { useField } from 'formik'


const styles = StyleSheet.create({
    errorContainer: {
        marginTop: 5
    }
})

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helper] = useField(name)
    const showError = meta.touched && meta.error

    return (
        <>
            <TextInput
                onChangeText={value => helper.setValue(value)}
                onBlur={() => helper.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            {showError && <Text color='errorTheme' style={styles.errorContainer}>{meta.error}</Text>}
        </>
    )
}

export default FormikTextInput