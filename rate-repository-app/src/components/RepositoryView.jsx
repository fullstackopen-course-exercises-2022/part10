import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useParams } from 'react-router-native'
import useRepositoryView from '../hooks/useRepositoryView'
import RepositoryItem from './RepositoryItem'
import RepositoryReviewItem from './RepositoryReviewItem'

const styles = StyleSheet.create({
    selector: {
        height: 10
    }
})

const ItemSeparator = () => <View style={styles.separator} />

const ReviewItem = ({ item }) => {
    return (
        <RepositoryReviewItem item={item} />
    )
}

const RepositoryView = () => {
    const { repositoryId } = useParams()
    const { repository, fetchMore } = useRepositoryView({ id: repositoryId, first: 10 })

    const repositoryReviewNodes = repository ?
        repository?.reviews?.edges?.map((edge) => edge?.node) : []

    const onEndReach = () => {
        fetchMore()
    }

    return (
        <FlatList
            data={repositoryReviewNodes}
            ListHeaderComponent={
                () => repository ?
                    <RepositoryItem
                        singleView={true}
                        item={repository}
                    /> : null
            }
            keyExtractor={({ id }) => id}
            renderItem={ReviewItem}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
        />
    )
}

export default RepositoryView