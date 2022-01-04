import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    text: {
        color: 'lightblue',
        fontSize: 32,
        textAlign: 'center',
        fontFamily: 'Goldman-Regular',
        textShadowOffset: {width: 5, height: 5},
        textShadowColor: '#3264a8',
        textShadowRadius: 20,
    },
    button: {
        fontFamily: 'Goldman-Regular',
        backgroundColor: '#0f3f82',
        paddingHorizontal: 20,
        paddingVertical: 8,
        alignItems: 'center',
    },
})