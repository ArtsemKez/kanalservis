import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    Body: {
        minHeight: 330,
        minWidth: 290,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#27569C',
        margin: 15
    },
    Title: {
        fontSize: 24,
        fontWeight: "800",
        lineHeight: 29,
        alignItems: 'center',
        textAlign: 'center',
        color: '#27569C',
    },
    Input: {
        backgroundColor: '#D9D9D9',
        height: 39,
        marginTop: 13,
        marginLeft: 35,
        marginRight: 35,
        borderWidth: 5,
        borderColor: '#27569C',
        borderRadius: 10,
    },
    TitleInput: {
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 29,
        alignItems: 'center',
        marginLeft: 35,
        marginTop: 13
    },
    Button: {
        backgroundColor: '#E4B062',
        borderRadius: 5,
        height: 43,
        marginTop: 13,
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center'
    },
    PressableText: {
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 29,
        marginTop: 6
    },
    errorMessage: {
        color: '#e80c0c',
        fontSize: '20',
        textAlign: 'center',
        marginTop: 30,
    }
})