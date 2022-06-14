import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import theme from "../theme";

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
})

const RepositoryItem = ({ item }) => (
    <View style={styles.container}>
        <ScrollView vertical>
            <View style={styles.flexRepo}>
                <Image style={styles.repoImage} source={{uri: item.ownerAvatarUrl}} />
                <View>
                    <Text style={styles.repoText}>{item.fullName}</Text>
                    <Text style={styles.repoText}>{item.description}</Text>
                    <View style={styles.languageContainer}>
                        <Text style={styles.languageText}>{item.language}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.flexRepoStats}>
                <View>
                    <Text style={{ textAlign: 'center' }}>{item.stargazersCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>{item.forksCount}</Text>
                    <Text>Forks</Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>{item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View>
                    <Text style={{ textAlign: 'center' }}>{item.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </ScrollView>
    </View>
)

export default RepositoryItem