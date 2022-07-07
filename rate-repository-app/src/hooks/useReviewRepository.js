import React from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_NEW_REVIEW } from '../graphql/mutations'
import { useApolloClient } from '@apollo/client'

const useReviewRepository = () => {
    const [ mutate, result ] = useMutation(CREATE_NEW_REVIEW)
    const apolloClient = useApolloClient()
    const createReview = async ({ repositoryName, ownerName, rating, text }) => {
        const response = await mutate({ variables: { repositoryName, ownerName, rating: parseInt(rating), text } })
        await apolloClient.resetStore()
        return response
    }
    return [
        createReview,
        result
    ]
}

export default useReviewRepository