import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    content: {
        marginTop: Constants.statusBarHeight + 40,
        marginHorizontal: 20
    },

    title: {
        fontWeight: 'bold',
        fontSize: 35,
    },
    searchContainer: {
        backgroundColor: '#F6F6F6',
        flexDirection: "row",
        marginTop: 20,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center'
    }
})

export default styles