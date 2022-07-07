import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Switch } from 'react-router-native'
import Login from './Login'
import RepositoryView from './RepositoryView'
import CreateReview from './CreateReview'
import Signup from './Signup'
import CurrentUserView from './CurrentUserView'

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1
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
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/review-repository'>
                    <CreateReview />
                </Route>
                <Route path='/my-reviews'>
                    <CurrentUserView />
                </Route>
                <Route path='/view/:repositoryId'>
                    <RepositoryView />
                </Route>
            </Switch>
        </View>
    )
}
export default Main