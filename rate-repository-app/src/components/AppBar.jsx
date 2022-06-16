import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import { Link, useHistory } from 'react-router-native'
import AppBarItem from './AppBarItem'
import { ME } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import useAuthStorage from '../hooks/useAuthStorage'
import { useApolloClient } from '@apollo/client'
import { useContext } from 'react'
import AuthStorageContext from '../context/AuthStorageContext'

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.primary,
        height: 80,
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        marginTop: 20,
        paddingLeft: 7
    }
})

const AppBar = () => {
    const history = useHistory()
    const { data } = useQuery(ME, {
        fetchPolicy: 'cache-and-network'
    })
    const authStorage = useContext(AuthStorageContext)
    const apolloClient = useApolloClient()

    async function handleLogout() {
        await authStorage.removeAccessToken()
        history.push('/login')
        await apolloClient.resetStore()
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link style={styles.text} to='/'>
                    <AppBarItem name='Repositories' />
                </Link>
                {data?.me ?
                    <Link style={styles.text} onPress={handleLogout}>
                        <AppBarItem name='Log Out' />
                    </Link>
                    :
                    <Link style={styles.text} to='/login'>
                        <AppBarItem name='Login' />
                    </Link>
                }
            </ScrollView>
        </View>
    )
}

export default AppBar