import React, { useState, useEffect } from 'react'
import { GET_REPOS } from '../graphql/queries'
import { useQuery } from '@apollo/client'

function UseRepositories() {
    const [repos, setRepos] = useState()
    const [loading, setLoading] = useState(false)
    const {data} = useQuery(GET_REPOS, {
        fetchPolicy: 'cache-and-network'
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

export default UseRepositories