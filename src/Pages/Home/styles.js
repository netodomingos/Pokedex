import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },

    background: {
        position: 'absolute',
        width: 350,
        height: 350,
        right: -123,
        top: -90
    },

    content: {
        marginTop: Constants.statusBarHeight + 170,
        marginHorizontal: 20
    },

    title: {
        fontWeight: 'bold',
        fontSize: 40,
    },
    searchContainer: {
        backgroundColor: '#F6F6F6',
        flexDirection: "row",
        marginTop: 20,
        padding: 10,
        borderRadius: 25,
        alignItems: 'center'
    },

    menu: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },

    menu2: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    card: {
        backgroundColor: "#4EC2A6",
        width: 180,
        height: 100,
        height: 70,
        padding: 20,
        borderRadius: 30,
        flexDirection: 'row',
        margin: 10
    },

    backgroundCard1: {
        opacity: 0.2,
        backgroundColor: '#F6F6F6',
        position: 'absolute',
        width: 60,
        height: 60,
        top: -25,
        left: -25, 
        borderRadius: 30
    },

    cardText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        justifyContent: 'center',
    },

    backgroundCard2: {
        opacity: 0.2,
        width: 60,
        height: 60,
        position: 'absolute',
        right: 2,
        marginTop: 5,
        marginLeft: 10,
    }
})

export default styles