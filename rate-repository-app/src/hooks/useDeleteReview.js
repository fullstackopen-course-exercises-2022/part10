import React from 'react'
import { DELETE_REVIEW } from '../graphql/mutations'
import { useMutation, useApolloClient } from '@apollo/client'

const useDeleteReview = () => {
    const [ mutate, result ] = useMutation(DELETE_REVIEW)
    const apolloClient = useApolloClient()

    const deleteReview = async (id) => {
        const removeReview = await mutate({ variables: {id} })
        await apolloClient.resetStore()
        console.log(removeReview)

        return removeReview
    }
    return [ deleteReview, result ]
}

export default useDeleteReview