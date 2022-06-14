import Text from './Text'
import { View, TextInput, Pressable, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'

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
    password: ''
}

const inputValidationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required!'),
    password: yup
        .string()
        .min(6, 'Minimum 6 characters!')
        .required('Password is required!')
})

const LoginForm = ({ onSubmit }) => (
    <View style={styles.container}>
        <FormikTextInput name="username" placeholder="Username" style={styles.inputField} />
        <FormikTextInput name="password" placeholder="Password" secureTextEntry={true} style={styles.inputField} />
        <Pressable onSubmit={onSubmit} style={styles.buttonPressable}>
            <Text color="headingPrimary" style={styles.buttonTitle}>Login</Text>
        </Pressable>
    </View>
)

const Login = () => {
    const onSubmit = values => {
        console.log(values)
    }
    return  (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={inputValidationSchema}>
            {({handleSubmit}) => <LoginForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default Login