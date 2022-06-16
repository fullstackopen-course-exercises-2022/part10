import { useState, useEffect } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepository from '../hooks/useRepositories'

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
})

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repos } = useRepository()

    const repositoryItem = ({ item }) => (
        <RepositoryItem item={item} />
    )

    const repositoryNodes = repos ?
        repos?.edges?.map((edge) => edge?.node) : []

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={repositoryItem}
        />
    );
};

export default RepositoryList;