import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Switch } from 'react-router-native'
import Login from './Login'
import styled from 'styled-components'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        // backgroundColor: '#ddd'
    },
})

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                {/*<Route path='*' element={<Navigate to='/' Replace />} />*/}
            </Switch>
        </View>
    )
}

export default Main;