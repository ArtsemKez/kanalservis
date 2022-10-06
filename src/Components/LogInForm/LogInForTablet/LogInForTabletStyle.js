import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    Body: {
        height: 330,
        minWidth: 480,
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#27569C',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '40%',
    },
    Title: {
        fontSize: 24,
        fontWeight: "800",
        lineHeight: 29,
        alignItems: 'center',
        textAlign: 'center',
        color: '#27569C',
        marginTop: 25,
        marginBottom: 25,
    },
    Input: {
        backgroundColor: '#D9D9D9',
        height: 39,
        width: 295,
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
        width: 213,
        marginTop: 35,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center'
    },
    PressableText: {
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 29,
        marginTop: 6
    },
    InputBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    }
})