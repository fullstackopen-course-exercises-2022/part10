import { Text, View, StyleSheet, Button, Alert } from 'react-native'
import moment from 'moment'
import useDeleteReview from '../hooks/useDeleteReview'
import { useHistory } from 'react-router-native'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        display: 'flex',
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 5
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    rateContainer: {
        marginRight: 10,
    },
    textContainer: {
        borderRadius: 10,
        borderColor: '#007acc',
        borderWidth: 3,
        borderStyle: 'solid',
        padding: 5,
        color: '#007acc'
    },
    textStyle: {
        marginBottom: 10,
        padding: 2,
        width: 300,
        textAlign: "justify"
    },
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const RepositoryReviewItem = ({ item, showReviewActions }) => {
    const history = useHistory()
    const [ deleteReview ] = useDeleteReview()

    const deleteReviewAlert = () =>
        Alert.alert (
            'Delete your Review',
            'Are you sure you want to delete this review',
            [
                { text: 'Cancel', onPress: () => { return false }, style: 'cancel' },
                { text: 'OK', onPress: () => deleteReview(item.id) }
            ]
        )

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.rateContainer}>
                    <Text style={styles.textContainer}>{item?.rating}</Text>
                </View>
                <View>
                    <Text style={styles.textStyle}>{item?.user?.username}</Text>
                    <Text style={styles.textStyle}>{moment(item?.createdAt).format('YYYY.MM.DD')}</Text>
                    <Text style={styles.textStyle}>{item?.text}</Text>
                </View>
            </View>
            {showReviewActions && (
                <View style={styles.actionContainer}>
                    <Button title="Delete Review" onPress={deleteReviewAlert} />
                    <Button title="View Repository" onPress={() => history.push(`/view/${item.repositoryId}`)} />
                </View>
            )}
        </View>
    )
}

export default RepositoryReviewItem