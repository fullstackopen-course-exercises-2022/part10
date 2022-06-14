import { View, StyleSheet, Pressable, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import Text from './Text'
import theme from '../theme'
import { Link } from 'react-router-native'
import AppBarItem from './AppBarItem'

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
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link style={styles.text} to='/'>
                    <AppBarItem name='Repositories' />
                </Link>
                <Link style={styles.text} to='/login'>
                    <AppBarItem name='Login' />
                </Link>
            </ScrollView>
        </View>
    )
}

export default AppBar