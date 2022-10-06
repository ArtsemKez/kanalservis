import React from 'react';
import {SafeAreaView, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";

export const LogInScreen = () => {
    return (
                <SafeAreaView style={styles.logInScreen}>
                    <StatusBar style="auto"/>
                    <Text>LogIn</Text>
                </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    logInScreen: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
