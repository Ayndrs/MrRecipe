import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    appContainer: {
        height: '100%',
        backgroundColor: '#222222',
    },
    topbar: {
        paddingTop: 30,
        height: 110,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#518BFF',
    },
    searchTopbar: {
        paddingTop: 30,
        height: 174,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#518BFF',
    },
    topbarTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    searchbar: {
        width: 300,
        borderWidth: 5,
        marginTop: 15,
        borderColor: 'white',
        borderRadius: 20,
        padding: 7,
        backgroundColor: 'white',
        color: 'black',
    },
    itemContainer: {
        width: Dimensions.get('window').width/2 - 9,
        height: 250,
        height: Dimensions.get('window').height/3.5 - 27,
        borderRadius: 15,
        marginBottom: 6
    },
    list: {
        height: Dimensions.get('window').height/3.5 - 27,
        alignItems: 'center',
        padding: 15,
        margin: 3,
        backgroundColor: '#282828',
        borderRadius: 15,
    },
    listImage: {
        height: (Dimensions.get('window').width/2 - 40) * .6,
        width: (Dimensions.get('window').width/2 - 40),
        borderRadius: 15,
        marginBottom: 10
    },
    listTitle: {
        color: '#FFD9AC',
        fontSize: 22,
        paddingHorizontal: 5,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        backgroundColor: '#28466E',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
    },
    listText: {
        color: '#FFD9AC',
        fontSize: 13,
        paddingHorizontal: 5,
        marginTop: 5,
        textAlign: 'center',
        backgroundColor: '#28466E',
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
    },
    ratingBar: {
        flex: 1, 
        marginHorizontal: 30,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 10,
    },
    rating: {
        color: 'gray',
        fontSize: 12,
        marginHorizontal: 6,
        fontWeight: 'bold',
    },
    author: {
        marginTop: 'auto',
    },
});