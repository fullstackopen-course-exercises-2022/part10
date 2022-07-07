import React, { useState, useEffect } from 'react'
import { ME } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useCurrentUser = (variables) => {
    const { data, loading, fetchMore, result } = useQuery(ME, {
        fetchPolicy: 'cache-and-network',
        variables
    })

    return { data: data ? data?.me : [], result }
}

export default useCurrentUser