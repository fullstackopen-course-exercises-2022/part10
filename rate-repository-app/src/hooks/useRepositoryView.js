import React, {useEffect, useState} from 'react'
import {GET_REPO} from '../graphql/queries'
import {useQuery} from '@apollo/client'

const useRepositoryView = (variables) => {
    const [ repository, setRepository ] = useState({})
    const { data, loading, fetchMore, ...result } = useQuery(GET_REPO, {
        fetchPolicy: "cache-and-network",
        variables
    })

    const handleFetchMore = () => {
        const canFetchMore = !loading && data?.repository?.review?.pageInfo?.hasNextPage
        if(!canFetchMore) {
            return
        }

        fetchMore({
            query: GET_REPO,
            variables: {
                after: data?.repository?.review?.pageInfo?.endCursor,
                ...variables
            },
            updateQuery:(previousValues, { fetchMoreValues }) => {
                return {
                    repository: {
                        ...fetchMoreValues.repository,
                        reviews: {
                            ...fetchMoreValues.repository.reviews,
                            edges: [
                                ...previousValues.repository.reviews.edges,
                                ...fetchMoreValues.repository.reviews.edges
                            ]
                        }
                    }
                }
            }
        })
    }

    const fetchRepository = () => {
        if(data !== undefined && data?.repository !== undefined) {
            setRepository(data?.repository)
        }
    }
    console.log(repository)

    useEffect(() => {
        fetchRepository()
    }, [data])

    return {
        repository,
        loading,
        fetchMore: handleFetchMore,
        ...result
    }
}


export default useRepositoryView