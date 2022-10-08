import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {HeaderComponent} from "../../Components/Header/Header";

export const UsersScreen = () => {
    return (
        <View style={styles.usersScreen}>
            <StatusBar style="auto"/>
            <HeaderComponent/>
            <Text>Users</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    usersScreen: {
        
    },
});
