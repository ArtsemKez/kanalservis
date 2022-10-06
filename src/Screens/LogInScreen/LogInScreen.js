import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HeaderComponent} from "../../Components/Header/Header";

export const LogInScreen = () => {
    return (
                <View style={styles.logInScreen}>
                    <StatusBar style="auto"/>
                    <HeaderComponent/>
                    <Text>LogIn</Text>
                </View>

    );
};

const styles = StyleSheet.create({
    logInScreen: {

    },
});