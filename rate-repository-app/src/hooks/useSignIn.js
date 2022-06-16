import React from 'react'
import { useMutation } from '@apollo/client'
import { AUTHENTICATE_USER } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'
import { useApolloClient } from '@apollo/client'
import { useContext } from 'react'
import AuthStorageContext from '../context/AuthStorageContext'

const useSignIn = () => {
    const [ mutate, result ] = useMutation(AUTHENTICATE_USER)
    const authStorage = useContext(AuthStorageContext)
    const apolloClient = useApolloClient()
    const signIn = async ({ username, password }) => {
        const response = await mutate({ variables: { username, password } })
        await authStorage.setAccessToken(response.data.authenticate.accessToken)
        await apolloClient.resetStore()
    }
    return [ signIn, result ]
}

export default useSignIn