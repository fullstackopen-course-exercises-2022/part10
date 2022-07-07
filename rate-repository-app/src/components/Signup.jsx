import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import useSignUp from '../hooks/useSignUp'
import FormikTextInput from '../components/FormikTextInput'
import { useHistory } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'transparent',
    },
    inputField: {
        borderStyle: 'solid',
        borderColor: '#ddd',
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10
    },
    buttonPressable: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#007acc',
        borderRadius: 5
    }
})

const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
}

const formValidationSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required!'),
    password: yup.string()
        .required('Password is required!')
        .min(4).max(25),
    confirmPassword: yup.string()
        .required('Confirm password is required!')
        .oneOf([yup.ref('password')], 'Passwords does not match')
})

const SignupForm = ({ onSubmit }) => (
    <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" style={styles.inputField} />
        <FormikTextInput name="password" placeholder="Password" style={styles.inputField} />
        <FormikTextInput name="confirmPassword" placeholder="Confirm password" style={styles.inputField} />
        <Button title="Sign Up" onPress={onSubmit} style={styles.buttonPressable} />
    </View>
)

const Signup = () => {
    const history = useHistory()
    const { signUp } = useSignUp()
    const onSubmit = async (values) => {
        try {
            const { username, password } = values
            await signUp({ username, password })
            history.push('/')
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={formValidationSchema}>
            {({ handleSubmit }) => <SignupForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default Signup