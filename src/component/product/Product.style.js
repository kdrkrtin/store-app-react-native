import { StyleSheet, Dimensions } from "react-native";

const productStyle = StyleSheet.create({
    storeItem: {
        flex: 1 / 2,
        padding: 10,
        margin: 5,
        backgroundColor: '#e3e3e3',
        borderRadius: 5
    },
    image: {
        height: Dimensions.get('window').height / 3,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 10
    },
    price: {
        fontSize: 14,
        marginTop: 5
    },
    stock: {
        color: 'red',
        fontSize: 16,
        marginTop: 5
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    }
});

export default productStyle;