import React, { useState, useEffect } from 'react'
import { GET_REPOS } from '../graphql/queries'
import { useQuery } from '@apollo/client'

function useRepositories(searchKeyword) {
    const [repos, setRepos] = useState()
    const [loading, setLoading] = useState(false)

    const { data } = useQuery(GET_REPOS, {
        fetchPolicy: "cache-and-network",
        variables: { searchKeyword }
    })

    const fetchRepositories = async () => {
        if(data !== undefined && data.repositories !== undefined ) {
            setRepos(data?.repositories)
        }
    }

    useEffect(() => {
        fetchRepositories()
    }, [data])

    return { repos, loading, refetch: fetchRepositories }
}

export default useRepositories