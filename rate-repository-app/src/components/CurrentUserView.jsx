import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import useCurrentUser from '../hooks/useCurrentUser'
import RepositoryReviewItem from './RepositoryReviewItem'

const styles = StyleSheet.create({})

const CurrentUserView = () => {
    const { data } = useCurrentUser({
        'includeReviews': true
    })
    const myReviewsNode = data ?
        data?.reviews?.edges?.map(edge => edge?.node)
        : []
    return (
        <FlatList
            data={myReviewsNode}
            renderItem={({ item }) => <RepositoryReviewItem item={item} showReviewActions={true} />}
            keyExtractor={({ id }) => id}
        />
    )
}

export default CurrentUserView