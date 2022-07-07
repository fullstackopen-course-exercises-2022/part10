import React from 'react'
import { CREATE_USER } from '../graphql/mutations'
import { useMutation, useApolloClient } from '@apollo/client'

const useSignUp = () => {
    const [ mutate, results ] = useMutation(CREATE_USER)
    const apolloClient = useApolloClient()

    const signUp = async ({ username, password }) => {
        const response = await mutate({ variables: { username: username, password: password } })
        await apolloClient.resetStore()
        console.log(response)
        return response
    }
    return { signUp, results }
}

export default useSignUp