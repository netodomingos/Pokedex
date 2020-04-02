import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        paddingBottom: 30,
        borderBottomLeftRadius:25,
        borderBottomRightRadius: 25,
    },

    background: {
        position: 'absolute',
        width: 350,
        height: 350,
        right: -110,
        top: -110,
    },

    content: {
        marginTop: Constants.statusBarHeight + 150,
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
        width: 180,
        height: 100,
        height: 70,
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        margin: 10,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },

    backgroundCard1: {
        opacity: 0.2,
        backgroundColor: '#FFF',
        position: 'relative',
        width: 60,
        height: 60,
        top: -45,
        left: -45, 
        borderRadius: 30,
        zIndex: -1
    },

    backgroundCard2: {
        opacity: 0.2,
        width: 70,
        height: 70,
        position: 'relative',
        right: -40,
        top: -20,
        zIndex: 2
    },

    newsContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: "column"
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'

    },
    newsTitle: {
        fontSize: 23
    },

    newsLink: {
        color: '#5073E8',
        fontSize: 16
    },

    noticeContainer: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    noticeText: {
        marginTop: 20,
    },

    noticeTitle: {
        fontSize: 16
    },

    noticeDate: {
        color: 'gray',
        fontSize: 13,
        marginTop: 3,
    },

    noticeImage: {
        height: 80,
        width: 120,
        marginLeft: 40,
        borderRadius: 20,
    }

})

export default styles