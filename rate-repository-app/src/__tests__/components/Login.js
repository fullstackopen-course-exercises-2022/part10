import {  waitFor, render, fireEvent } from '@testing-library/react-native'
import { LoginForm } from '../../components/Login'
import { Formik } from 'formik'

describe('Testing Login Page', () => {
    describe('Testing LoginForm', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const onSubmit = jest.fn()

            const initialValues = {
                username: '',
                password: ''
            }

            const { getByTestId } = render(
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {({handleSubmit}) => <LoginForm onSubmit={handleSubmit} />}
                </Formik>
            )

            fireEvent.changeText(getByTestId('username'), 'kalle')
            fireEvent.changeText(getByTestId('password'), 'password')
            fireEvent.press(getByTestId('Login'))

            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1)
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password'
                })
            })
        })
    })
})