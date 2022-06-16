import { View, TextInput, Pressable, StyleSheet, Button } from 'react-native'
import { Formik, useField } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import useSignIn from '../hooks/useSignIn'
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
        <Button onPress={onSubmit} style={styles.buttonPressable} title="Login" />
    </View>
)

const Login = () => {
    const history = useHistory()
    const [ signIn ] = useSignIn()
    const onSubmit = async (values) => {
        const { username, password } = values
        console.log(values)
        try {
            await signIn({ username, password })
            history.push('/')
        } catch(err) {
            console.log(err)
        }
    }
    return  (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={inputValidationSchema}>
            {({handleSubmit}) => <LoginForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default Login
