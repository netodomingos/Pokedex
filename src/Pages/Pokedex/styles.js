import { StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },

    background: {
        position: 'absolute',
        width: 350,
        height: 350,
        right: -110,
        top: -110,
    },

    arrowBack: {
        marginTop: Constants.statusBarHeight + 30,
        marginLeft: 20,
    },

    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 45
    },

    content: {
        marginTop: 20,
        marginHorizontal: 10,
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    pokemonCard: {
        width: 180,
        height: 130,
        backgroundColor: '#4EC2A6',
        padding: 10,
        borderRadius: 15,
        flexDirection: "row",
        overflow: "hidden",
        margin: 2
    },
    pokemonName: {
        color: "#FFF",
        marginTop: 20,
        marginLeft: 5,
        fontSize: 20,
    },
    pokemonTypeCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 2,
        borderRadius: 10,
        width: 80,
        marginTop: 2,
    },
    pokemonType: {
        color: "#FFF",
        textAlign: 'center'
    },

    backgroundCard: {
        width: 100,
        height: 100,
        position: 'relative',
        right: -10,
        bottom: -40,
        opacity: 0.3
    },

    pokemonImage: {
        width: 100,
        height: 100,
        position: 'relative',
        bottom: 75,
        left: 0
    }
    
})

export default styles