import {Text, View, StyleSheet, Image, ScrollView, Pressable, Button} from 'react-native'
import theme from '../theme'
import { useHistory } from 'react-router-native'
import * as Linking from 'expo-linking'

const styles = StyleSheet.create({
    container: {
        borderColor: '#ddd',
        width: '100%',
        padding: 20,
        borderWidth: 1,
    },
    flexRepo: {
        display: 'flex',
        flexDirection: 'row'
    },
    repoImage: {
        width: 50,
        height: 50,
        borderRadius: 4,
        marginRight: 10
    },
    flexRepoStats: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    repoText: {
        marginBottom: 5
    },
    languageContainer: {
        width: 100,
        borderRadius: 4,
    },
    languageText: {
        marginBottom: 5,
        padding: 5,
        backgroundColor: '#007acc',
        width: '100%',
        borderRadius: 4,
        color: theme.colors.headingPrimary,
        fontWeight: theme.fontWeights.bold,
        textAlign: 'center'
    },
    buttonStyle: {
        backgroundColor: '#007acc',
        width: '100%',
        padding: 10
    }
})

const RepositoryItem = ({ item, singleView }) => {
    const history = useHistory()
    const clickRepository = () => {
        history.push(`/view/${item?.id}`)
    }
    const openRepository = async () => {
        await Linking.openURL(item.url)
    }
    return (
        <Pressable style={styles.container} onPress={clickRepository}>
            <ScrollView vertical>
                <View style={styles.flexRepo}>
                    <Image style={styles.repoImage} source={{uri: item?.ownerAvatarUrl}} />
                    <View>
                        <Text style={styles.repoText} testID="fullName">{item?.fullName}</Text>
                        <Text style={styles.repoText} testID="description">{item?.description}</Text>
                        <View style={styles.languageContainer}>
                            <Text style={styles.languageText} testID="language">{item?.language}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.flexRepoStats}>
                    <View>
                        <Text style={{ textAlign: 'center' }} testID="stargazersCount">{item?.stargazersCount}</Text>
                        <Text>Stars</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center' }} testID="forksCount">{item?.forksCount}</Text>
                        <Text>Forks</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center' }} testID="reviewCount">{item?.reviewCount}</Text>
                        <Text>Reviews</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: 'center' }} testID="ratingAverage">{item?.ratingAverage}</Text>
                        <Text>Rating</Text>
                    </View>
                </View>
                {singleView && <Button style={styles.buttonStyle} title="GitHub Link" onPress={openRepository} />}
            </ScrollView>
        </Pressable>
    )
}

export default RepositoryItem