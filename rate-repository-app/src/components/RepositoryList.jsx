import { useState, useEffect, Component } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
import { useDebounce } from 'use-debounce'

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    container: {
        padding: 10,
        backgroundColor: 'transparent',
    },
    inputField: {
        borderStyle: 'solid',
        borderColor: '#ddd',
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        marginTop: 10
    },
    buttonPressable: {
        width: '100%',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#007acc',
        borderRadius: 5
    }
})

const ItemSeparator = () => <View style={styles.separator} />

export class RepositoryListContainer extends Component {
    renderHeader = () => {
        const { handleSearchedRepositories, searchRepository } = this.props
        const handleChange = (query) => {
            handleSearchedRepositories(query)
        }
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    value={searchRepository}
                    onChangeText={handleChange}
                    placeholder="Search a Repository"
                />
            </View>
        )
    }

    render() {
        const repositoryItem = ({ item }) => (
            <RepositoryItem item={item} />
        )

        const repositoryNodes = this.props.repos ?
            this.props?.repos?.edges?.map((edge) => edge?.node) : []

        return (
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={repositoryItem}
                keyExtractor={({ id }) => id}
                ListHeaderComponent={this.renderHeader}
                onEndReached={this.props.onEndReach}
                onEndReachedThreshold={0.5}
            />
        )
    }
}

const RepositoryList = () => {
    const [ searchRepository, setSearchRepository ] = useState('')
    const [ searchRepositoryDebounce ] = useDebounce(searchRepository, 1000)
    const { repos } = useRepositories(searchRepositoryDebounce)

    const handleSearchedRepositories = (value) => {
        setSearchRepository(value)
    }

    const onEndReach = () => {
        console.log('You have reached the end of the list!')
    }

    return (
        <RepositoryListContainer
            repos={repos}
            searchRepository={searchRepository}
            setSearchRepository={setSearchRepository}
            handleSearchedRepositories={handleSearchedRepositories}
            onEndReach={onEndReach}
        />
    )
}

export default RepositoryList