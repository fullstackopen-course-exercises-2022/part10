import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'
import useReviewRepository from '../hooks/useReviewRepository'
import { useHistory } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        padding: 10
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
    repositoryName: '',
    ownerName: '',
    rating: '',
    text: ''
}

const inputValidationSchema = yup.object().shape({
    repositoryName: yup.string()
        .required('Repository name is required'),
    ownerName: yup.string()
        .required('Name of owner is required'),
    rating: yup.number()
        .required('Rating is required')
        .min('0').max('100')
})

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput style={styles.inputField} name="repositoryName" placeholder="Repository Name" />
            <FormikTextInput style={styles.inputField} name="ownerName" placeholder="Owner Name" />
            <FormikTextInput style={styles.inputField} name="rating" placeholder="Rating" />
            <FormikTextInput style={styles.inputField} name="text" placeholder="Review" multiline={true} />
            <Button style={styles.buttonPressable} title="Submit Review" onPress={onSubmit} />
        </View>
    )
}

const CreateReview = () => {
    const [ createReview ] = useReviewRepository()
    const history = useHistory()
    const onSubmit = async (values) => {
        try {
            const { repositoryName, ownerName, rating, text } = values
            console.log(values)
            await createReview({ repositoryName, ownerName, rating, text })
            history.push('/')
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={inputValidationSchema}>
            {
                ({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />
            }
        </Formik>
    )
}

export default CreateReview